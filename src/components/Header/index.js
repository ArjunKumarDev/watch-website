import { Container } from "components/common/CommonStyle";
import React, { useState } from "react";
import { Hamburger, HeaderContainer, Title, Wrapper } from "./HeaderStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "components/NavBar";

export default function Header() {
  const [sideMenu, setSideMenu] = useState(false);

  const closeMenu = () => setSideMenu(false);
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title to="Home" spy={true} smooth={true} offset={50} duration={500}>
            ⌚Watch'O
          </Title>
          <NavBar sideMenu={sideMenu} closeMenu={closeMenu} />
          <Hamburger onClick={() => setSideMenu(!sideMenu)}>
            <GiHamburgerMenu className="ham__icon" />
          </Hamburger>
        </HeaderContainer>
      </Container>
    </Wrapper>
  );
}
