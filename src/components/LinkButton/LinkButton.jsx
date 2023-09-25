import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";
function LinkButton({ path, text }) {
  return (
    <Link
      className='link-button'
      to={path}
    >
      {text}
    </Link>
  );
}
export default LinkButton;
