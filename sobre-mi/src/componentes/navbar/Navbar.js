import React from 'react';
import "./Navbar.css";
import * as ReactBootstrap from "react-bootstrap";

const Navbar = ({ isScrolling }) => {

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
  return (
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
          <ReactBootstrap.Navbar.Brand className = "navlogo" href="#home" onClick  = {toTheTop} >Mauricio</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="#home">Descripción</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#features">Aficiones</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#pricing">Contacto</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Form inline>
            <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <ReactBootstrap.Button variant="outline-info">Search</ReactBootstrap.Button>
          </ReactBootstrap.Form>
      </nav>
    )
}

export default Navbar
