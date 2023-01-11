import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css'
const NavbarComponent = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-center petunjuk">
         <Link to="/" className='home'>Home</Link>
         <Link to="/food" className='makanan'>Makanan</Link>
         <Link to="/drink" className='minuman'>Minuman</Link>
         <Link to="/dessert" className='cemilan'>Dessert</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavbarComponent