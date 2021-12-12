import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Components/header/Header";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <h2>Dashboard page</h2>
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
