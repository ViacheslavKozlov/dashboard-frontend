import React from "react";
import { NavLink } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <h2>LoginPage</h2>
      <nav>
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
      </nav>
    </>
  );
};

export default LoginPage;
