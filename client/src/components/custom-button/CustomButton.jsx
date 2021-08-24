import React from "react";
import "./CustomButton.scss";
export const CustomButton = ({
  children,
  isGoogle,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogle ? "google-signin" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
