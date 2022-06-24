import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     * {
         padding: 0;
         margin: 0;
         box-sizing: border-box;
     }

     img {
         max-width: 100%;
         height: auto;
     }

     html {
         font-size: 10px;
         scroll-behavior: smooth;
     }

     body {
         font-family: Poppins,"sans-serif";
         background-color: #f7f7f7;
     }

     ul {
         list-style: none;
     }
     a {
         text-decoration: none;
     }

     ::selection {
         color:#fff;
         background-color: ${(props) => props.theme.colors.Mint};
     }


    a {
        cursor: pointer;
    }
`;
