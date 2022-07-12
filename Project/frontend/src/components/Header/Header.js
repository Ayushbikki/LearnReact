import React from 'react'
import {Navbar,Container,Nav,Form,NavDropdown,FormControl,Button} from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
  <Container>
    <Navbar.Brand href="#home">React-App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='m-auto'>
      <Form className="d-flex ml-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </Nav>
      <Nav
        
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="mynotes1">My Notes</Nav.Link>
        <NavDropdown title="Username" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header