import React from "react"
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Navbar, Nav } from 'react-bootstrap'


export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <LinkContainer to="/"><Button>Live Map</Button></LinkContainer><p>&nbsp;&nbsp;</p>
          <LinkContainer to="/about"><Button>About</Button></LinkContainer>
          <LinkContainer to="/activeFires"><Button>Active Fires</Button></LinkContainer>
        </Nav>
      </Navbar>
    </Navbar>
  );
}
