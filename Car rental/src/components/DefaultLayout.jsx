import React from 'react';
import logo from '../components/assests/logo.png'; 

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function DefaultLayout() {
    const navigate = useNavigate()
  return (

    <Navbar expand="lg" className="bg-warning" >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="120" height="50" style={{paddingTop:10}} /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Deals</Nav.Link>
            <NavDropdown title="Sign/Registration" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate("/Register")}>Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() =>navigate("/Login") }>Sign in</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() =>navigate("/cars") } >
              Cars
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default DefaultLayout;
