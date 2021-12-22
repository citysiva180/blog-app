import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
function NavBar({ loggedIn }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Blog-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createpost">Create Posts</Nav.Link>
            {loggedIn === false ? (
              <Nav.Link href="/login">Login</Nav.Link>
            ) : (
              <Nav>
                <Nav.Link href="#" disabled>
                  Logged In
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
