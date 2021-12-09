import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isAuthSelector } from "../redux/auth/authSelectors.js";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(isAuthSelector);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
