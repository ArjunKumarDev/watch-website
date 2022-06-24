  import { Link } from "react-scroll";
  import styled from "styled-components";
  import { device } from "styles/theme";

  export const Wrapper = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.Mantis},
      ${(props) => props.theme.colors.Mint}
    );
  `;

  export const HeaderContainer = styled.div`
    height: calc(2.8rem + 2.4rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    @media ${device.tablet} {
      padding: 3rem;
      height: calc(4.8rem + 2.4rem);
      justify-content: space-between;
    }
  `;
  export const Title = styled(Link)`
    font-size: 2rem;
    font-weight: 600;
    color: #fff;

    @media ${device.tablet} {
      font-size: 3rem;
    }
  `;

  export const Hamburger = styled.div`
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: end;

    .ham__icon {
      color: #fff;
    }
    @media (min-width: 769px) {
      display: none;
    }
  `;
