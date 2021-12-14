import React from "react";
// import MainRoutes from "../routes/MainRoutes.js";
import { lazy, Suspense } from "react";
import { Switch } from "react-router";
import PublicRoute from "../routes/PuplicRoute";
import PrivateRoute from "../routes/PrivateRoute";
// import { useSelector } from "react-redux";
import { isAuthSelector } from "../redux/auth/authSelectors.js";
import { Redirect } from "react-router-dom";

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
  // const isLoggedIn = useSelector(isAuthSelector);
  // console.log(isLoggedIn);
  return (
    <>
      <Switch>
        <Suspense fallback={null}>
          <PublicRoute exact path="/" redirectTo="/dashboard">
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" redirectTo="/dashboard">
            <RegPage />
          </PublicRoute>
          <PrivateRoute path="/dashboard" redirectTo="/">
            <DashboardPage />
          </PrivateRoute>
          {/* {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/" />} */}
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
