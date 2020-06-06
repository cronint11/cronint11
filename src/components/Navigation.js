import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import profile_pic from '../img/profile_pic.jpg';

const Navigation = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar >
      {/* className="sticky-top navbar-light bg-light" */}
      <NavbarBrand href="/"><img alt="Tim Cronin" className="myIcon" src={profile_pic} /></NavbarBrand><span id="name">Tim Cronin</span>
      {/* Code below for mobile */}
      {/* <NavbarToggler onClick={toggle} >
        <Collapse isOpen={isOpen} navbar >
          <span className="navbar-toggler-icon"><span style={{ display: "none" }}>Nav</span></span>
        </Collapse>
      </NavbarToggler> */}
      {/* <Collapse isOpen={!isOpen} navbar> */}
        <Nav>
          <NavItem>
            <NavLink href="/">home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">portfolio</NavLink>
            </NavItem>
          <NavItem>
            <NavLink href="/">contact</NavLink>
          </NavItem>
        </Nav>
      {/* </Collapse> */}
    </Navbar>
  );
};

export default Navigation;