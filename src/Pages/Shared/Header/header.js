import React from 'react';
import './header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom"
import logo from '../../../imges/experts/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)

    const hendelsignout = () => {
        signOut(auth)
    }

    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img height={'35px'} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
<<<<<<< HEAD
                            {/* <Nav.Link href="/">Services</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">expatrs</Nav.Link> */}
                            {/* home#Services */}
=======
                            <Nav.Link href="home#Services">Services</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="home#expatrs">expatrs</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
>>>>>>> 3c7d764ad2470c788beffc4f92e89e823134fc7a
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Services</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">expatrs</Nav.Link>
                            <Nav.Link as={Link} to="/">about</Nav.Link>

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={hendelsignout}>SignOut</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;