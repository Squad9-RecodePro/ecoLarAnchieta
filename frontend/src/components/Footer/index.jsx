import React from 'react';
//import { Container }   from 'react-bootstrap';

import '../../assets/styles/global.css';

import './styles.css';

const Footer = () => {
    return (
        <>
            <div className="rodape" style={{backgroundColor: "#333333"}}>
                <footer className="footer-copyright text-center py-3 border shadow">
                    &copy; {new Date().getFullYear()} - ECO LAR ANCHIETA - SQUAD 9
                </footer>
            </div>          
        </>
    );
}

export default Footer;