import styled from "styled-components";
import { device } from "styles/theme";

export const ExploreWrapper = styled.div`
  padding: 3rem;

  @media ${device.tablet} {
    padding: 10rem 3rem;
  }
`;

export const ExploreContainer = styled.div`
  display: flex;
  padding-bottom: 2.5rem;
`;

export const ExploreCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
`;

export const ExploreWatches = styled.div`
  display: inline-flex;
  flex-direction: column;
  min-height: 30rem;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
  }

  @media ${device.tablet} {
    min-height: 36rem;
    img {
      width: 100px;
      height: 100px;
      box-shadow: 0 0.9rem 1rem rgb(0 0 0 / 70%);
    }
  }
`;

export const ExplorePreview = styled.div`
  padding: 4rem;
  transition: 0.5s;
  img {
    height: 200px;
    width: 200px;
  }
`;

export const WatchName = styled.h3`
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.Grey};
`;

export const WatchDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.Grey};
  margin-bottom: 1rem;
`;
