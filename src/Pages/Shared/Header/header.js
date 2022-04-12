import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../imges/experts/logo.png'
const header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='rounded' src={logo} alt="" height="30" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </header>
    );
};

export default header;