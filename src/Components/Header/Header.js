
import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
  <Navbar className="py-3" collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top">
    <Container>
    <Navbar.Brand href="#home">OsudhPotro</Navbar.Brand>
    <Nav className="me-auto">
      
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/medicines">Medicines</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/privacy">Privacy-Policy</Nav.Link>
      <Nav.Link as={Link} to="/Login">login</Nav.Link>
      {user.email &&
      <Navbar.Text>
        Signed:-  {user.displayName} 
      </Navbar.Text>}

    {user.email &&
    <Button onClick={logOut} className="ms-2" variant="secondary">Sign Out</Button>}
    </Navbar.Collapse>
   
    </Container>
  </Navbar>
  

   
</>
    );
};

export default Header;