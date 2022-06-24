import React from "react";
import { NavBarContainer, NavList, NavItem, NavLink } from "./NavBarStyle";

export default function NavBar({ sideMenu, closeMenu }) {
  return (
    <NavBarContainer>
      <NavList sideMenu={sideMenu}>
        <NavItem>
          <NavLink
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
            onClick={closeMenu}
          >
            {" "}
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="About"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            onClick={closeMenu}
          >
            {" "}
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="Popular"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            onClick={closeMenu}
          >
            {" "}
            Popular
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="Explore"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            onClick={closeMenu}
          >
            Explore
          </NavLink>
        </NavItem>
      </NavList>
    </NavBarContainer>
  );
}
