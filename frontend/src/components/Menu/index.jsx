import React from 'react';

import '../../assets/styles/global.css';

import './styles.css';

const Menu = () => {
    return (
        <>
            <a href="./UserLogin">Login</a>
            <a href="./RegisterUser">Inscreva-se</a>
            <a href="./AdminLogin">Login Administrador</a>
        </>
    );
}

export default Menu;