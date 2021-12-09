import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authSelectors } from "../redux/auth/authSelectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isAuthSelector);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
