import React from "react";
import { WrapperStyled } from "./WrapperStyled";

const Wrapper = ({ children }) => {
  return (
    <WrapperStyled>
      <div className="container">{children}</div>
    </WrapperStyled>
  );
};

export default Wrapper;
