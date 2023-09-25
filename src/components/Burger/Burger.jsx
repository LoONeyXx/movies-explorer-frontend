import React from "react";
import "../../css/button.css";
import "./Burger.css";
import burgerIcon from "../../images/burger.svg";
import burgerClose from "../../images/burger_close.svg";
import { useState } from "react";
import AuthButton from "../AuthButton/AuthButton";
import Navigation from "../Navigation/Navigation";
function Burger() {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <div className='burger'>
      <div
        onClick={(e) => setActiveBurger((prev) => !prev)}
        className={`button burger__icon ${
          activeBurger ? "burger__icon_active" : ""
        }`}
        style={{
          backgroundImage: `url(${
            activeBurger ? burgerClose : burgerIcon
          })`,
        }}
      />

      <div
        className={`burger__popup-menu ${
          activeBurger ? "burger__popup-menu_active" : ""
        }`}
      >
        <Navigation name='burger' />
        <AuthButton
          type='account'
          name='burger'
          text='Аккаунт'
          path='/profile'
        />
      </div>
      <div
        className={`burger__popup ${
          activeBurger ? "burger__popup_active" : ""
        }`}
      ></div>
    </div>
  );
}
export default Burger;
