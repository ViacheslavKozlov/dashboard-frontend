import React, { useEffect } from "react";
// import MainRoutes from "../routes/MainRoutes.js";
import { lazy, Suspense } from "react";
import { Switch } from "react-router";
import PublicRoute from "../routes/PuplicRoute";
// import PrivateRoute from "../routes/PrivateRoute";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../redux/auth/authSelectors.js";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getErrorCardsSelector } from "../redux/cards/cardsSelectors";
import "react-toastify/dist/ReactToastify.css";

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

  const error = useSelector(getErrorCardsSelector);

  useEffect(() => {
    toast.error(error);
  }, [error]);

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
          <PublicRoute path="/dashboard" redirectTo="/">
            <DashboardPage />
          </PublicRoute>
          {/* {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/" />} */}
        </Suspense>
      </Switch>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
