import React from "react";
import "./CustomButton.scss";
export const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className="custom-button" {...otherProps}>
      {children}
    </div>
  );
};
