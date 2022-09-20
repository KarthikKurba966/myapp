import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export const Header=()=>{
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">ECOMMERCE</Link></Navbar.Brand>
          <Link to="/"><i className="fa fa-home"></i>Home</Link>
          <Nav className="ml-auto">
            <Link to="/"><i className="fa fa-shopping-cart"></i>Cart</Link>
            <Link to="/about"><i className="fa fa-user"></i>Login</Link>
           
          </Nav>
        </Container>
      </Navbar>
        </>

    )
}