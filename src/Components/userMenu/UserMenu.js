import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutOperation } from "../../redux/auth/authOperations";
import { userSelector } from "../../redux/auth/authSelectors";
import icons from "../../icons/icons.svg";
import { UserMenuWrapper } from "./UserMenuStyled";
import useDeviceSizes from "../../hooks/useDeviceSizes";

const UserMenu = () => {
  const dispatch = useDispatch();
  //   const { name } = useSelector(userSelector);
  const { isMobileDevice } = useDeviceSizes();
  const name = "vlad";
  const logout = () => {
    dispatch(logoutOperation());
  };
  return (
    <UserMenuWrapper>
      <p className="user-logo">{name.charAt(0).toUpperCase()}</p>
      {!isMobileDevice && (
        <p className="user-name">
          {name.charAt(0).toUpperCase() + name.substr(1)}'s Quest Log
        </p>
      )}
      <button className="user-logout" type="button" onClick={logout}>
        <svg className="user-logout-logo">
          <use href={icons + "#icon-logout"} />
        </svg>
      </button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
