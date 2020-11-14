import React from "react";

import { Container } from "./styles";
import Header from '../Header';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
        <Header/>
        <Main/>
    </Container>
  );
};

export default Layout;
