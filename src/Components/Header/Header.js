import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css'
import logo from '../../assets/logo.svg'
import UseContent from '../../Content/UseContent';

const Header = ({ setContent }) => {
    const { eng, arb } = UseContent();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container className='py-3'>
                    <Navbar.Brand href="#home">
                        <img className='img-fluid w-100' src={logo} alt="feva fits" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='nav-link-font ms-4' href="#home">Home</Nav.Link>
                            <Nav.Link className='nav-link-font ms-4' href="#features">Features</Nav.Link>
                            <Nav.Link className='nav-link-font ms-4' href="#programs">Programs</Nav.Link>
                            <Nav.Link className='nav-link-font ms-4' href="#download">Download</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link className='me-3'>
                                <NavDropdown title="Lang" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" onClick={() => setContent(eng)}>Eng</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1" onClick={() => setContent(arb)}>Ar</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>
                            <button className='feva-btn'>Get Started</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;