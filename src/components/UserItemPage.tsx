import axios from 'axios'
import React, {FC, useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IUser } from '../types/types'

type UserItemPageParams = {
    id: string
}

export const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>User page {user?.name} from {user?.address.city}</h1>
            <div>{user?.email}</div>
        </div>
    )
}
