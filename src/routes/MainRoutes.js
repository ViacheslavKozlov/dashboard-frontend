import { lazy, Suspense } from "react";
import { Redirect, Switch } from "react-router";
import PublicRoute from "./PuplicRoute";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../redux/auth/authSelectors.js";

const DashboardPage = lazy(
  () =>
    import("../pages/DashboardPage.js") /*webpackChunkName: 'DashboardPage' */
);
const LoginPage = lazy(
  () => import("../pages/LoginPage.js") /*webpackChunkName: 'LoginPage' */
);
const RegPage = lazy(
  () => import("../pages/RegPage.js") /*webpackChunkName: 'RegPage' */
);

const MainRoutes = () => {
  const isLoggedIn = useSelector(isAuthSelector);

  return (
    <>
      <Switch>
        <Suspense fallback="">
          <PublicRoute exact path="/">
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/">
            <RegPage />
          </PublicRoute>
          <PrivateRoute path="/dashboard" restricted redirectTo="/">
            <DashboardPage />
          </PrivateRoute>
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
        </Suspense>
      </Switch>
    </>
  );
};

export default MainRoutes;
