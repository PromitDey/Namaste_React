import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CiWifiOn, CiWifiOff } from "react-icons/ci";

export const Header = () => {
  const isOnline = useOnlineStatus();

  //named export
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className={isOnline ? "wifi-green" : "wifi-red"}>
            {isOnline ? <CiWifiOn/> : <CiWifiOff />}
          </li>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="header-signIn"
            onClick={() => {
              if (btnName == "Login") {
                setBtnName("Logout");
              } else {
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
