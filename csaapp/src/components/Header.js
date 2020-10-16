import React from "react"
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Navbar, Nav } from 'react-bootstrap'


export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto" >
<<<<<<< HEAD
          <LinkContainer to="/"><Button>Live Map</Button></LinkContainer>
          <LinkContainer to="/about"><Button>About</Button></LinkContainer>
          <LinkContainer to="/activeFires"><Button>Risk Regions</Button></LinkContainer>
=======
          <LinkContainer to="/"><Button>Live Map</Button></LinkContainer><p>&nbsp;&nbsp;</p>
          <LinkContainer to="/about"><Button>About</Button></LinkContainer><p>&nbsp;&nbsp;</p>
          <LinkContainer to="/activeFires"><Button>Active Fires</Button></LinkContainer>
>>>>>>> 6f2cb7ba6c12c100b5f446a0bcbda8c0579b097c
        </Nav>
      </Navbar>
    </Navbar>
  );
}

