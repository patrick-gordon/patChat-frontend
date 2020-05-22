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

export default function AppNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen({ isOpen: !isOpen });
  };

  return (
    <Navbar color="dark" dark expand="sm" className="mb5">
      <NavbarBrand href="/">PatChat</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* <NavLink href="/login">Login</NavLink> */}
            {/* <NavLink href="/signup">signup</NavLink> */}
            <NavLink href="/">Feed</NavLink>
            {/* <NavLink href="/profile">profile</NavLink> */}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
