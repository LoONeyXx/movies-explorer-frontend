import React from "react";
import "./Register.css";
import LinkButton from "../LinkButton/LinkButton";
import AuthForm from "../AuthForm/AuthForm";
import Authorization from "../Authorization/Authorization";

function Register(props) {
  return (
    <main className='register'>
      <Authorization>
        <AuthForm
          title='Добро пожаловать!'
          name='authorization'
        >
          <fieldset className='auth-form__fieldset auth-form__fieldset_place_authorization'>
            <label
              htmlFor='name'
              className='auth-form__label
              auth-form__label_place_authorization'
            >
              Имя
              <input
                name='name'
                id='name'
                type='text'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введите имя'
                required
                autoComplete='off'
                minLength='2'
                maxLength='32'
              />
            </label>
            <label
              htmlFor='email'
              className='auth-form__label 
              auth-form__label_place_authorization'
            >
              E-mail
              <input
                name='email'
                id='email'
                type='email'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введите E-mail'
                required
                autoComplete='off'
              />
            </label>
            <label
              htmlFor='password'
              className='auth-form__label auth-form__label_place_authorization'
            >
              Пароль
              <input
                name='password'
                type='password'
                id='password'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введите пароль'
                required
                autoComplete='off'
                minLength='6'
                maxLength='32'
              />
            </label>
          </fieldset>

          <span className='auth-form__input-error auth-form__input-error_visible auth-form__input-error_place_authorization'>
            Что-то пошло не так....
          </span>
          <button
            type='submit'
            className='button auth-form__submit auth-form__submit_place_register'
          >
            Зарегистрироваться
          </button>
        </AuthForm>
        <p className='authorization__footer-link'>
          Уже зарегистрированы?
          <LinkButton
            text='Войти'
            path='/signin'
          />
        </p>
      </Authorization>
    </main>
  );
}
export default Register;
