import React from "react";
import { NavLink } from "react-router-dom";
import Auth from "../Components/auth/Auth";

const LoginPage = () => {
  return (
    <>
      {/* <h1>LoginPage</h1> */}
      <Auth />
      {/* <nav>
        <ul>
          <li>
            <NavLink to="/register" exact>
              RegPage
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

export default LoginPage;
