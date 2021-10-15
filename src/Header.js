import React from 'react'
import {Navbar, Nav, Container, NavDropdown, Row, Col} from 'react-bootstrap';
// import { Container } from 'react-bootstrap'; 


const Header = () => {
    return (
       <header>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Shop" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
        </NavDropdown>
        <Nav  className="ml-auto">
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container className=' bg-dark text-white'>
   <div className='text-center font-weight-bold w-100 p-3 m-8 h-100 d-inline-block  '>
        <h1>Shop in Style</h1>
   </div>
    <div className='text-center w-100 p-5 m-8 h-100 d-inline-block '>
        With this shop hompeage template
    </div>
</Container>              
</header>
    )
}

export default Header
