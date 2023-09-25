import React from "react";
import "../../css/link.css";
import "./LogoButton.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
function LogoButton({ place }) {
  return (
    <Link
      to='/'
      style={{ backgroundImage: `url(${logo})` }}
      className={`link logo ${place ? "logo_place_" + place : ""}`}
    />
  );
}
export default LogoButton;
