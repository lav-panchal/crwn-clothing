import React from "react";
import "./CustomButton.scss";
export const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isGoogle ? "google-signin" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
