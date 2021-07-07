import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Header } from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import { SigninSignup } from "./pages/signin-signup/Signin-Signup";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SigninSignup} />
        </Switch>
      </>
    );
  }
}

export default App;
