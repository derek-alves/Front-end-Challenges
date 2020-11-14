import React from "react";

import { Container } from "./styles";

interface Props {
  name: string;
  min: number;
  max: number;
}
const CapitalInfo: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container>
      <li>
        <div className="teste">
          <span>{props.min}</span>
        </div>

        <div>
          <span>{props.max}</span>
        </div>

        <div className="name">
          <span>{props.name}</span>
        </div>
      </li>
    </Container>
  );
};

export default CapitalInfo;
