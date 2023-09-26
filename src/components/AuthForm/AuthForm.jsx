import "./AuthForm.css";
import "../../css/button.css";

function AuthForm({ onSubmit, name, children, title = "Дратути" }) {
  return (
    <form
      action='#'
      noValidate
      className={`auth-form auth-form_place_${name}`}
      onSubmit={onSubmit}
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
