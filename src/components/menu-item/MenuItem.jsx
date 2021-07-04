import React from "react";
import "./MenuItem.scss";
export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <>
      <div className={`${size} menu-item`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subttle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
};
