import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./Signin-Signup.scss";
export const SigninSignup = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};
