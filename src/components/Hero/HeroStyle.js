import styled from "styled-components";
import { device } from "styles/theme";

export const HeroWrapper = styled.div`
  background: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.Mantis},
    ${(props) => props.theme.colors.Mint}
  );
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  height: 100vh;
  text-align: center;
  place-items: center;
  place-content: center;
  padding: 3rem;

  .hero__img {
    height: 200px;
    width: 200px;
    order: 1;
  }

  @media ${device.tablet} {
    .hero__img {
      height: 350px;
      width: 350px;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: left;
    padding: 10rem 3rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 0.85rem;
  color: #fff;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.laptop} {
    font-size: 4rem;
  }
`;

export const HeroDescription = styled.p`
  line-height: 1.8;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;
