import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import { SigninSignup } from "./pages/signin-signup/Signin-Signup";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDoc(userAuth);
        useRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
// import "./App.css";
// import { Homepage } from "./pages/homepage/Homepage";
// import Header from "./components/header/Header";
// import Shop from "./pages/shop/Shop";
// import { SigninSignup } from "./pages/signin-signup/Signin-Signup";
// import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
// import { connect } from "react-redux";
// import { setCurrentUser } from "./redux/user/user.actions";

// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     const { setCurrentUser } = this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createUserProfileDoc(userAuth);

//         userRef.onSnapshot((snapShot) => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data(),
//           });
//         });
//       }

//       setCurrentUser(userAuth);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route path="/shop" component={Shop} />
//           <Route
//             exact
//             path="/signin"
//             render={() =>
//               this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
//             }
//           />
//         </Switch>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
