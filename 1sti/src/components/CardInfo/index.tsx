import React from "react";
import { FiX } from "react-icons/all";
import { Container, Header } from "./styles";

const CarInfo: React.FC = () => {
  return (
    <Container>
      <div className="topSection">
        <span>Niterói, Rj - Brasil</span>
        <FiX size={10} />
      </div>
      <Header>
        <h1>20</h1>
      </Header>
    </Container>
  );
};

export default CarInfo;
