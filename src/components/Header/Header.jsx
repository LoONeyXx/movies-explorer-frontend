import { useContext } from "react";
import "./Header.css";
import LogoButton from "../LogoButton/LogoButton";
import AuthButton from "../AuthButton/AuthButton";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import { LoginContext } from "../../contexts/LoginContext";

function Header() {
  const isLogin = useContext(LoginContext);

  return (
    <header
      className={`header ${isLogin ? "header_status_login" : ""}`}
    >
      <LogoButton place='header' />
      {isLogin && <Navigation name='header' />}
      <nav className='header__menu header__menu_authorization'>
        {isLogin ? (
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
      {isLogin && <Burger />}
    </header>
  );
}
export default Header;
