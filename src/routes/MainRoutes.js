import { lazy, Suspense } from "react";
import { Switch } from "react-router";
import PublicRoute from "./PuplicRoute";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../redux/auth/authSelectors.js";
import { Redirect } from "react-router-dom";

const DashboardPage = lazy(() => import("../pages/DashboardPage.js") /*webpackChunkName: 'DashboardPage' */);
const LoginPage = lazy(() => import("../pages/LoginPage.js") /*webpackChunkName: 'LoginPage' */);
const RegPage = lazy(() => import("../pages/RegPage.js") /*webpackChunkName: 'RegPage' */);

const MainRoutes = () => {
  const isLoggedIn = useSelector(isAuthSelector);
  console.log(isLoggedIn);

  return (
    <>
      <Switch>
        <Suspense fallback="">
          <PublicRoute exact restricted path="/">
            <LoginPage />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted redirectTo="/">
            {/* {!isLoggedIn ? <RegPage /> : <Redirect to="/" />} */}
            <RegPage />
          </PublicRoute>
          <PrivateRoute exact path="/dashboard" restricted redirectTo="/">
            <DashboardPage />
          </PrivateRoute>
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
        </Suspense>
      </Switch>
    </>
  );
};

export default MainRoutes;
