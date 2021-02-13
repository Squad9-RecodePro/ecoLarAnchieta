import React from 'react';
import { Container }   from 'react-bootstrap';

import '../../assets/styles/global.css';

import './styles.css';

const Footer = () => {
    return (
        <>
            <div className="rodape">
                <footer className="footer-copyright text-center py-3 border shadow">
                    &copy; {new Date().getFullYear()} - EcoLar Anchieta
                </footer>
            </div>          
        </>
    );
}

export default Footer;