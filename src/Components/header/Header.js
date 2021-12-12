import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import UserMenu from "../userMenu/UserMenu";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  const { isMobileDevice } = useDeviceSizes();
  return (
    <HeaderContainer>
      {/* <div className="header">
        <h1 className="headerLogo">Dashboard</h1></div> */}
      {isMobileDevice ? (
        <div>
          <div className="header-mob">
            <h1 className="header-logo">Dashboard</h1>
            <UserMenu />
          </div>
        </div>
      ) : (
        <div>
          <div className="header-desc">
            <h1 className="header-logo">Dashboard</h1>
            <UserMenu />
          </div>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
