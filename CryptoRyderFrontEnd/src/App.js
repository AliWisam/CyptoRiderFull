import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./css/style.scss";
import "./App.css";
import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";
import SignIn from "./pages/SignIn";
import Form from "./pages/Form";
function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route path="/signin" component={SignIn} />
        {!localStorage.getItem("walletAddress") ? (
          <>
            <Redirect from="/" exact to="/signin" />
          </>
        ) : (
          <Route path="/" exact component={Form} />
        )}
      </Switch>
    </>
  );
}

export default App;
