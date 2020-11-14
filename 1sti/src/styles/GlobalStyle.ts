import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;

      color: var(--white);
    }

    html,body,#root{
      max-height:100vh;
      max-width:100vw;

      width:100%;
      height:100%;
      font-size:14px;
      font-family:sans-serif;
    }

    *,button,input{
      border:0;
      background:none;
    }

    body{
      background:var(--primary);
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
:root{
  --white:#fff;
  --primary:linear-gradient(to bottom, rgba(255,140,0,1), rgba(255,165,0,0.8));
}

`;