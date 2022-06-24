import styled from "styled-components";
import { device } from "styles/theme";
import WatchOne from "assets/images/watch-2.png";
import WatchTwo from "assets/images/watch-2.png";
import WatchThree from "assets/images/watchpix-5.jpg";

export const PopularWrapper = styled.div`
  padding: 3rem;

  @media ${device.tablet} {
    padding: 10rem 3rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 4rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8rem;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PopularCard = styled.div`
  background-color: transparent;
  height: 52rem;
  perspective: 150rem;
`;

export const PopularCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  transition: transform 0.6s;
  transform-style: preserve-3d;

  .flip__card {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
  }

  ${PopularCard}:hover & {
    transform: rotateY(180deg);
  }

  .card__back--1 {
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.Mantis},
      ${(props) => props.theme.colors.Mint}
    );
  }

  .card__back--2 {
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.Cyclamen},
      ${(props) => props.theme.colors.LightSalmon}
    );
  }

  .card__back--3 {
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.Yellow},
      ${(props) => props.theme.colors.Crayola}
    );
  }
`;

export const CardFront = styled.div`
  background-color: #fff;

  .card__picture--1 {
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.Mantis},
        ${(props) => props.theme.colors.Mint}
      ),
      url(${WatchOne});
  }

  .card__picture--2 {
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.Cyclamen},
        ${(props) => props.theme.colors.LightSalmon}
      ),
      url(${WatchTwo});
  }
  .card__picture--3 {
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.Yellow},
        ${(props) => props.theme.colors.Crayola}
      ),
      url(${WatchThree});
  }
`;

export const CardPicture = styled.div`
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CardBack = styled.div`
  color: #fff;
  transform: rotateY(180deg);
`;

export const CtaCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CtaPriceBox = styled.div`
  /* margin-bottom: 8rem; */
`;

export const CtaPriceText = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
`;

export const CtaPriceValue = styled.div`
  font-size: 6rem;
  font-weight: 500;
`;

export const CardDetails = styled.div`
  padding: 2rem;

  @media ${device.tablet} {
    padding: 3rem;
  }
`;

export const CardList = styled.ul`
  width: 80%;
  margin: 0 auto;

  li:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

export const CardItem = styled.li`
  text-align: center;
  font-size: 1.15rem;
  color: #000;
  padding: 1rem;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;

export const CardHeading = styled.div`
  font-size: 2rem;
  padding: 1rem 1.3rem;
  font-weight: 600;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  .card__heading-span--1 {
    background-image: linear-gradient(
      to left bottom,
      ${(props) => props.theme.colors.Mantis},
      ${(props) => props.theme.colors.Mint}
    );
  }

  .card__heading-span--2 {
    background-image: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.Cyclamen},
      ${(props) => props.theme.colors.LightSalmon}
    );
  }

  .card__heading-span--3 {
    background-image: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.Yellow},
      ${(props) => props.theme.colors.Crayola}
    );
  }
`;

export const CardHeadingSpan = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
