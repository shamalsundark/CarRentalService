import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
 
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: '160px', // Adjust the height as needed
              maxWidth: '1500px', // Adjust the width as needed
              border: '2px solid #fff', // Border color
              backgroundColor: 'purple', // Background color
              color: '#fff', // Text color
              borderRadius: '10px', // Border radius
              padding: '10px', // Padding around the links
              fontSize: '1.2rem', // Font size
            }}
            navbarScroll
          >
            <Link to="/sedan" className="nav-link">SEDAN</Link>
            <Nav.Link href="#action2">HATCHBACK</Nav.Link>
            <Nav.Link href="#action3">XUV</Nav.Link>
            <Nav.Link href="#action4">MUV</Nav.Link>
            <Nav.Link href="#action5">LUXURY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    </div>
    </div>
   
  );
}

export default NavScrollExample;
