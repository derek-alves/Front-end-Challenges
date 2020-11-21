import { createGlobalStyle } from "styled-components";

const GloblaStyles = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    html{
      font-size:62.5%;
    }

    html,body,#__next{
      height: 100vh;
      width: 100vw;
    }

    body{
      font-family: 'Poppins', sans-serif;
      
    }

    :root {
    --background: #E5E5E5;
    --red: #FF575F;
    --black: #1F2E35;
    
  }
`;

export default GloblaStyles;
