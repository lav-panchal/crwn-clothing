import React from "react";
import "./CustomButton.scss";
export const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <div
      className={`${isGoogle ? "google-signin" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </div>
  );
};
