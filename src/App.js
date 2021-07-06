import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Header } from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import { SigninSignup } from "./pages/signin-signup/Signin-Signup";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SigninSignup} />
      </Switch>
    </>
  );
}

export default App;
