import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isAuthSelector } from "../redux/auth/authSelectors.js";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/dashboard",
  ...routeProps
}) {
  const isLoggedIn = useSelector(isAuthSelector);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
