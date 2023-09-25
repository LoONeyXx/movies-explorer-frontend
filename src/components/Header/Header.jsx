import { useContext } from "react";
import "./Header.css";
import LogoButton from "../LogoButton/LogoButton";
import AuthButton from "../AuthButton/AuthButton";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header
      className={`header ${
        currentUser.email ? "header_status_login" : ""
      }`}
    >
      <LogoButton place='header' />
      {currentUser.email && <Navigation name='header' />}
      <nav className='header__menu header__menu_authorization'>
        {currentUser.email ? (
          <AuthButton
            name='header'
            type='account'
            text='Аккаунт'
            path='/profile'
          />
        ) : (
          <>
            <AuthButton
              name='header'
              type='registration'
              text='Регистрация'
              path='/signup'
            />
            <AuthButton
              name='header'
              type='login'
              text='Войти'
              path='/signin'
            />
          </>
        )}
      </nav>
      {currentUser.email && <Burger />}
    </header>
  );
}
export default Header;
