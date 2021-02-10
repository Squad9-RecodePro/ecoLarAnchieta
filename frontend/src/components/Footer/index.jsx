import React from 'react';

import '../../assets/styles/global.css';

import './styles.css';

const Footer = () => {
    return (
        <>
            <div className="text-center">
                <footer>
                    &copy; {new Date().getFullYear()} - EcoLar Anchieta
                </footer>
            </div>
            
        </>
    );
}

export default Footer;