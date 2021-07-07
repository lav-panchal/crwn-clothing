import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Header } from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import { SigninSignup } from "./pages/signin-signup/Signin-Signup";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDoc(userAuth);
        useRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
