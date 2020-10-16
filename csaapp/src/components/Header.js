import React from "react"
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Navbar, Nav } from 'react-bootstrap'

//Add link to table database to header contents
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <LinkContainer to="/"><Button>Live Map</Button></LinkContainer>
          <LinkContainer to="/about"><Button>About</Button></LinkContainer>
          <LinkContainer to="/activeFires"><Button>Regions Risks</Button></LinkContainer>
        </Nav>
      </Navbar>
    </Navbar>
  );
}
