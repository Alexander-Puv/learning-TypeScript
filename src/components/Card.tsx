import React, { FC, useState } from 'react'

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string | number,
    height?: string | number,
    variant: CardVariant,
    children: React.ReactNode,
    onClick: (num: number) => void,
}

export const Card: FC<CardProps> = ({width, height, variant, children, onClick}) => {
    const [state, setState] = useState(0);
    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? 'gray 2px solid' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''}}
            onClick={() => onClick(state)}>
            {children}
        </div>
    )
}