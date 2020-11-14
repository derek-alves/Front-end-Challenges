import React from "react";

import { Container, InputWrapper,InputIcon, Input } from "./styles";
import CardInfo from '../../components/CardInfo';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Previsão do tempo</h1>
      <CardInfo/>
      <InputWrapper>
        <Input placeholder="Insira o nome da cidade " />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default Header;
