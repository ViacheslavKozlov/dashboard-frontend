import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutOperation } from "../../redux/auth/authOperations";
import { userSelector } from "../../redux/auth/authSelectors";
import icons from "../../icons/icons.svg";
const UserMenu = () => {
  const dispatch = useDispatch();
  //   const { name } = useSelector(userSelector);
  const name = "vlad";
  const logout = () => {
    dispatch(logoutOperation());
  };
  return (
    <div>
      <span>{name.charAt(0)}</span>
      <br />
      <span>{name}</span>
      <br />
      <button type="submit" onClick={logout}>
        <svg>
          <use href={icons + "#icon-logout"} />
        </svg>
      </button>
    </div>
  );
};

export default UserMenu;
