import React from 'react';
import { Container }   from 'react-bootstrap';

import '../../assets/styles/global.css';

import './styles.css';

const Footer = () => {
    return (
        <>
            {/* <Container className="navbar navbar-inverse navbar-fixed-bottom"> */}
                <footer className="footer">
                    &copy; {new Date().getFullYear()} - EcoLar Anchieta
                </footer>
            {/* </Container> */}
            
        </>
    );
}

export default Footer;