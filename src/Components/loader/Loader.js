import React from "react";
import Loader from "react-loader-spinner";
import { LoadersStyled } from "./LoadersStyled";

const Loaders = ({ size }) => {
  return (
    <LoadersStyled>
      <Loader type="MutatingDots" color="#00d7ff" secondaryColor="var(--btn-bg-color)" height={size} width={size} />
    </LoadersStyled>
  );
};

export default Loaders;
