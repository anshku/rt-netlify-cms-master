import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavbarMobileView = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <img src="uploads/Logo.svg" className="navbarLogo" alt="" />
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className={!collapsed ? "topSectionNavbar" : ""}>
            <NavItem>
              <NavLink className="active" href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMobileView;
