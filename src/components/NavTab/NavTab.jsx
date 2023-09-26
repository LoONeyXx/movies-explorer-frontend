
import "../../css/button.css";
import "./NavTab.css";

function NavTab({ text, idAnchor }) {
  return (
    <a
      href={`#${idAnchor}`}
      className='button promo__nav-tab'
    >
      {text}
    </a>
  );
}
export default NavTab;
