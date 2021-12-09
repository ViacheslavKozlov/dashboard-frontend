import React from "react";
// import MainRoutes from "../routes/MainRoutes.js";
import { lazy, Suspense } from "react";
import { Redirect, Switch } from "react-router";
import PublicRoute from "../routes/PuplicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../redux/auth/authSelectors.js";
// import DashboardPage from "../pages/DashboardPage";
// import LoginPage from "../pages/LoginPage";
// import RegPage from "../pages/RegPage";

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

function App() {
  const isLoggedIn = useSelector(isAuthSelector);
  return (
    <>
      <Switch>
        <Suspense fallback={null}>
          <PublicRoute exact path="/" restricted redirectTo="/dashboard">
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/dashboard">
            <RegPage />
          </PublicRoute>
          <PublicRoute path="/dashboard" restricted redirectTo="/">
            <DashboardPage />
          </PublicRoute>
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
