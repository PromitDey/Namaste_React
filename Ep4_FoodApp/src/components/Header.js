import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  //named export
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            className="header-signIn"
            onClick={() => {
              if(btnName == "Login"){
                setBtnName("Logout");
              }else{
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
