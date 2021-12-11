import React from "react";
import { NavLink } from "react-router-dom";
const RegPage = () => {
  return (
    <>
      <h2>Reg page</h2>
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
