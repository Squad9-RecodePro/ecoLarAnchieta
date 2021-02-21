import React from 'react';
import './style.css';

const Titulo = ({ children, style }) => {

    return (
        <span className="title" style={style}>
            {children}
        </span>
    )
}

export default Titulo
