import React from 'react';

import '../../assets/styles/global.css';

import './styles.css';

const Footer = () => {
    return (
        <>
            <footer>
                &copy; {new Date().getFullYear()} - EcoLar Anchieta
            </footer>
        </>
    );
}

export default Footer;