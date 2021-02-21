import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../assets/icons/icon.svg';
import Titulo from '../../Titulo';

const Menu = (props) => {
    return ( 
    <>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Navbar.Brand href={props.home}>
                <img
                    alt="Eco Lar Anchieta"
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-center"
                />{' '}
                
                <Titulo style={{color: '#0B305E'}}>ECO LAR ANCHIETA</Titulo>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    <Nav.Link href={props.page1}>{props.title1}</Nav.Link>
                    <Nav.Link href={props.page2}>{props.title2}</Nav.Link>
                    <Nav.Link href={props.page3}>{props.title3}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    );
}

export default Menu;
