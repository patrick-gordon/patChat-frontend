import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import './AppNav.css'

export default function AppNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen({ isOpen: !isOpen });
  };

  return (
    <Navbar  expand='lg' className="nav-bar">
      <NavbarBrand  style={{ color: 'black'}} href='/'>PatChat</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* <NavLink href="/login">Login</NavLink> */}
            {/* <NavLink href="/signup">signup</NavLink> */}
            <NavLink href="/" style={{ color: 'black'}}>Feed</NavLink>
            {/* <NavLink href="/profile">profile</NavLink> */}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
