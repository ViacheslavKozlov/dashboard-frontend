import React from "react";
import { NavLink } from "react-router-dom";
import Auth from "../Components/auth/Auth";
const RegPage = () => {
  return (
    <>
      {/* <h1>Reg page</h1> */}
      <Auth />
      {/* <nav>
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
      </nav> */}
    </>
  );
};

export default RegPage;
