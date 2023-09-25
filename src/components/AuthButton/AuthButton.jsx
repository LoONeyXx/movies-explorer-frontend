
import "../../css/button.css";
import "./AuthButton.css";
import { Link } from "react-router-dom";

function AuthButton({ text, path, name, type, onClick = null }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`button auth-button auth-button_type_${type} auth-button_place_${name}`}
    >
      {text}
    </Link>
  );
}
export default AuthButton;
