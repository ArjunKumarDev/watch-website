import { Link } from "react-scroll";
import styled from "styled-components";
import { device } from "styles/theme";

export const FooterWrapper = styled.div`
  background-color: #333;
  padding: 3rem;

  @media ${device.tablet} {
    padding: 10rem 3rem;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3rem;
  margin-top: 1.5rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2.5rem;
  }
`;

export const FooterTitle = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;

  &:hover {
    color: ${(props) => props.theme.colors.Mint};
  }
`;

export const FooterLinkTitle = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.Mint};

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

export const FooterList = styled.ul``;

export const FooterLinks = styled.li`
  margin-top: 2rem;
`;

export const FooterLink = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  transition: 0.3s;
  @media ${device.tablet} {
    font-size: 1.6rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.Mint};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;

  svg {
    fill: #fff;
    font-size: 2rem;
    transition: 0.3s;

    &:hover {
      fill: ${(props) => props.theme.colors.Mint};
    }
  }
`;
