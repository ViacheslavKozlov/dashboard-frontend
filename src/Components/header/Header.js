import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import UserMenu from "../userMenu/UserMenu";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  const { isMobileDevice } = useDeviceSizes();
  return (
    <HeaderContainer>
      <div className="container">
        <div className={isMobileDevice ? "header-mob" : "header-desc"}>
          <h1 className="header-logo">Dashboard</h1>
          <UserMenu />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
