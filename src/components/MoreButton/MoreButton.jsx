import React from "react";
import "../../css/button.css";
import "./MoreButton.css";

function MoreButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='button more-button'
      type="button"
    >
      Ещё
    </button>
  );
}
export default MoreButton;
