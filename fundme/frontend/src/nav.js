import React from 'react';
import Container from 'react-bootstrap/Container';
import NavbarText from 'react-bootstrap/esm/NavbarText';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function defaultNav(){
  return (
    <Navbar bg="primary" data-bs-theme="dark" className='p-2'>
          <Navbar.Brand href="#home">Fundme</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        <NavbarText>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </NavbarText>
    </Navbar>
  );
}

export default defaultNav;