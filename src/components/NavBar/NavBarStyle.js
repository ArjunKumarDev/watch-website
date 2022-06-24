import { Link } from "react-scroll";
import styled from "styled-components";

export const NavBarContainer = styled.div``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
  transition: 0.5s;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5rem;
    padding: 5rem;
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.Mantis},
      ${(props) => props.theme.colors.Mint}
    );
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 50px;
    box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
    right: ${(props) => (props.sideMenu ? "0" : "-600%")};
  }
`;

export const NavItem = styled.li`
  .active::before {
    content: "⌚";
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  transition: 0.4s;
`;
