import React from "react";
import { NavLink } from "react-router-dom";
const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard page</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              LoginPge
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" exact>
              RegPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DashboardPage;
