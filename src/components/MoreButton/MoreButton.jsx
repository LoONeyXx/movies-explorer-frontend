
import "../../css/button.css";
import "./MoreButton.css";

function MoreButton({ onMore }) {
  return (
    <button
      className='button more-button'
      type='button'
      onClick={onMore}
    >
      Ещё
    </button>
  );
}
export default MoreButton;
