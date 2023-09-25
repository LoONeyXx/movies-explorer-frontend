
import "../../css/link.css";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation({ name }) {
  function ClassLink({ isActive }) {
    if (isActive) {
      return `link menu-navigation__item menu-navigation__item_${name} menu-navigation__item_active`;
    }

    return `link menu-navigation__item menu-navigation__item_${name}`;
  }

  return (
    <nav className={`menu-navigation menu-navigation_${name}`}>
      {name === "burger" && (
        <NavLink
          to='/'
          className={ClassLink}
        >
          Главная
        </NavLink>
      )}
      <NavLink
        to='/movies'
        className={ClassLink}
      >
        Фильмы
      </NavLink>
      <NavLink
        to='/saved-movies'
        className={ClassLink}
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
