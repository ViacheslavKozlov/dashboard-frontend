import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isAuthSelector } from "../redux/auth/authSelectors.js";

export default function PrivateRoute({
  children,
  redirectTo = "/login",
  ...routeProps
}) {
  const isLoggedIn = useSelector(isAuthSelector);
  // console.log(isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
