import React from "react";
import { NavLink } from "react-router-dom";
const RegPage = () => {
  return (
    <>
      <h1>Reg page</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              LoginPge
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" exact>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RegPage;
