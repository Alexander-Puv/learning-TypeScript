import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import { Card, CardVariant } from './components/Card';
import { EventsExample } from './components/EventsExample'; */
import { TodosPage } from './components/TodosPage';
import { UserItemPage } from './components/UserItemPage';
import { UserPage } from './components/UserPage';

const App = () => {
    
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/todos'}>Todos</NavLink>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UserPage />} />
                    <Route path={'/todos'} element={<TodosPage />} />
                    <Route path={'/users/:id'} element={<UserItemPage />} />
                </Routes>
                {/* <EventsExample />
                <Card width={'300px'} height={'300px'} variant={CardVariant.outlined} onClick={(num) => {console.log(num);}}>
                    <button>btn</button>
                </Card> */}
            </div>
        </BrowserRouter>
    )
}

export default App;