import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBarElements = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Sp-ACE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="https://thirsty-polyanthus-690.notion.site/About-4873cd3219cc4f8ea0d0111e2c4e74ce">About</Nav.Link>
          <Nav.Link href="/MentorProfiles">맨토찾기</Nav.Link>
          <Nav.Link href="/Coin">꿈구매</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/Login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBarElements