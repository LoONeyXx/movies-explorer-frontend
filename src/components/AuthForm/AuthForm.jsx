import React from "react";
import "./AuthForm.css";
import "../../css/button.css";

function AuthForm({ onSubmit, name, children, title = "Дратути" }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <form
      onSubmit={handleSubmit}
      action='#'
      className={`auth-form auth-form_place_${name}`}
    >
      <h1
        className={`auth-form__title auth-form__title_place_${name}`}
      >
        {title}
      </h1>
      {children}
    </form>
  );
}
export default AuthForm;
