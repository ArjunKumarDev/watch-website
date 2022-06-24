import styled from "styled-components";
import { device } from "styles/theme";



export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
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
    margin-bottom: 4rem;
  }

  @media ${device.laptop} {
    font-size: 3.5rem;
  }
`;

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`;

export const StyledButton = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.4s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  margin-top: 1rem;

  &:hover {
    transform: translateY(-10px);
  }
`;
