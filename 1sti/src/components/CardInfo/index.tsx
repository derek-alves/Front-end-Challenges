import React from "react";

import { Container, Header, Bottom , FiArrowdown, FiArrowup, Fix} from "./styles";

const CarInfo: React.FC = () => {
  return (
    <Container>
      <div className="topSection">
        <span>Niterói, Rj - Brasil</span>
        <Fix size={20}/>
      </div>
      <Header>
        <div className="temp">
          <h1>20</h1>
          <h1>Nublado</h1>
        </div>

        <div className="variation">
          <div className="topDown">
            <FiArrowdown size={20} />
            <span>16</span>
            <FiArrowup size={20} />
            <span></span>
          </div>
          Sensação 19
        </div>

        <div className="wind">
          Vento
          <span>18km</span>
          Humidade
          <span>89%</span>
        </div>
      </Header>

      <Bottom>
        <div className="days">
          <span>Terça</span>
          <span>Quarta</span>
          <span>Quinta</span>
          <span>Sexta</span>
        </div>

        <div className="temp-day">
          <div>
            <span>18</span>
            <span>26</span>
          </div>

          <div>
            <span>18</span>
            <span>26</span>
          </div>

          <div>
            <span>18</span>
            <span>26</span>
          </div>

          <div>
            <span>18</span>
            <span>26</span>
          </div>
        </div>
      </Bottom>
    </Container>
  );
};

export default CarInfo;
