import React from "react";
import {
  HeroContainer,
  HeroDescription,
  HeroTitle,
  HeroWrapper,
} from "./HeroStyle";
import HomeLogo from "assets/images/watch-2.png";
import { Container } from "components/common/CommonStyle";

export default function Hero() {
  return (
    <HeroWrapper id="Home">
      <Container>
        <HeroContainer>
          <img src={HomeLogo} className="hero__img" alt="home-logo" />
          <div>
            <HeroTitle>Fall in love 💘 with our classic watches ⌚ </HeroTitle>
            <HeroDescription>
              There are all kinds of wonderful, stylish watches out here, and
              you can choose one which fits your own personality. They are a
              brilliant accessory, like a piece of jewellery
            </HeroDescription>
          </div>
        </HeroContainer>
      </Container>
    </HeroWrapper>
  );
}
