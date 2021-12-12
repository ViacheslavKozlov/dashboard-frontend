import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import UserMenu from "../userMenu/UserMenu";

const Header = () => {
  const { isMobileDevice } = useDeviceSizes();
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        {isMobileDevice ? (
          <div>
            <UserMenu />
          </div>
        ) : (
          <div>
            <UserMenu />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
