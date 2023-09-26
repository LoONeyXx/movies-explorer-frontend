
import "./LinkButton.css";
import { Link } from "react-router-dom";
function LinkButton({ path, text, onLink = null }) {
  return (
    <Link
      className='link-button'
      to={path}
      onClick={onLink}
    >
      {text}
    </Link>
  );
}
export default LinkButton;
