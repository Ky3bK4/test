import React, {useEffect, useState} from 'react';
import logo from '../assets/logo.svg'
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {fetchMenu} from "../app/shopApi";

const AppNavbar = () => {
  const [menuLinks, setMenuLinks] = useState([])

  useEffect(()=>{
    fetchMenu().then(data=> setMenuLinks(data.menu))
  },[])

  return <Navbar expand='md' bg="dark" variant="dark">
    <Container fluid>
      <NavLink to='/'>
        <Image src={logo} height={40}/>
      </NavLink>
      <Navbar.Toggle aria-controls="navbarScroll"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto mt-3 mt-md-0 align-items-center">
          {menuLinks.map(item=>
            <NavLink
              to={item.link}
              key={item.linkText}
              className=" btn btn-outline-light ms-md-3 mt-3 mt-md-0"
            >
              {item.linkText}
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
};

export default AppNavbar;