import React from "react";
import CapitalInfo from "../CapitalInfo";
import { Container, Minmax } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Capitais</h1>
      <Minmax>
        <span>Min</span>
        <span>Max</span>
      </Minmax>
      <ul>
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={5} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
        <CapitalInfo min={20} max={30} name="Rio de Janeiro" />
      </ul>
    </Container>
  );
};

export default Main;
