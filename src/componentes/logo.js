import React from "react";
import logo from "../img/logo.png";
import "../pages/login/login.css";

const Logo = () => {
  return (
    <header className="logo-posicao">
      <img src={logo} alt="Logo Chilli Burger" />
    </header>
  );
};

export default Logo;
