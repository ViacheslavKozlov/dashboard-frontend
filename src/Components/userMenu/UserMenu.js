import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutOperation } from "../../redux/auth/authOperations";
import { userSelector } from "../../redux/auth/authSelectors";
import icons from "../../icons/icons.svg";
import { UserMenuWrapper } from "./UserMenuStyled";
import useDeviceSizes from "../../hooks/useDeviceSizes";

const UserMenu = () => {
  const dispatch = useDispatch();
  // const { userName } = useSelector(userSelector);
  const { isMobileDevice } = useDeviceSizes();
  // console.log(userName);
  const userName = "MX";
  const logout = () => {
    dispatch(logoutOperation());
    console.log("logout");
  };

  return (
    <UserMenuWrapper>
      <p className="user-logo">{userName.charAt(0).toUpperCase()}</p>
      {!isMobileDevice && (
        <p className="user-name">
          {userName.charAt(0).toUpperCase() + userName.substr(1)}'s Quest Log
        </p>
      )}
      <button className="user-logout" type="submit" onClick={logout}>
        <svg className="user-logout-logo">
          <use href={icons + "#icon-logout"} />
        </svg>
      </button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
