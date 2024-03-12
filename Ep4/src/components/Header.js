import React from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => { //named export
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

