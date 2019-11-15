import React from "react";
import { Nav, NavLink, NavItem, Container } from "reactstrap";
import "./module.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Container>
        <Nav>
          <NavItem>
            <NavLink className="active" href="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img src="uploads/Logo.svg" alt="" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
};

export default Navbar;
