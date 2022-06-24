import styled from "styled-components";
import { device } from "styles/theme";

export const AboutContainer = styled.div`
  padding: 3rem;

  @media ${device.mobileL} {
    padding: 3rem;
  }

  @media ${device.tablet} {
    padding: 10rem 3rem;
  }
`;

export const DemoTitle = styled.div`
  margin: 2rem 0;
  text-align: center;

  @media ${device.tablet} {
    margin: 5rem 0;
  }
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.Mantis},
    ${(props) => props.theme.colors.Mint}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.laptop} {
    font-size: 3.5rem;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1.4rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
`;

export const AboutTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  color: #777777;
`;

export const AboutDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8;
  color: #777777;
  margin-bottom: 3rem;
`;

export const DemoGallery = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;

  @media ${device.tablet} {
    position: relative;
  }

  .gallery__img {
    width: 33%;
    transition: all 0.3s;
    box-shadow: 0 0.7rem 1rem rgb(0 0 0 / 50%);
    outline-offset: 1rem;
    width: 30%;

    @media ${device.tablet} {
      position: absolute;
      width: 53%;
    }

    &:hover {
      transform: scale(1.05) translateY(-0.2rem);
      box-shadow: 0 0.9rem 1rem rgb(0 0 0 / 70%);
      outline: 1.5rem solid #55c57a;
      z-index: 20;
    }
  }

  .gallery__img--1 {
    top: 0;
    left: 0;

    @media ${device.tablet} {
      top: -5px;
    }
  }

  .gallery__img--2 {
    top: -1.5rem;

    @media ${device.tablet} {
      right: 0;
      top: 3.5rem;
    }
  }

  .gallery__img--3 {
    top: 0;
    left: 0;

    @media ${device.tablet} {
      left: 20%;
      top: 10rem;
    }
  }
`;
