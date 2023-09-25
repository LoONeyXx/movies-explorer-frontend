import React, { useState } from "react";
import "../../css/link.css";
import "../../css/button.css";
import "./Profile.css";
import Header from "../Header/Header";
import AuthForm from "../AuthForm/AuthForm";
import { Link } from "react-router-dom";

function Profile(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <>
      <Header />
      <main className='profile-content'>
        <section className='profile'>
          <AuthForm
            name='profile'
            title='Привет, Виталий'
            onSubmit={() => setIsEditMode(false)}
          >
            <fieldset
              disabled={isEditMode ? false : true}
              className='auth-form__fieldset auth-form__fieldset_place_profile'
            >
              <label
                name='name'
                htmlFor='name'
                className='auth-form__label auth-form__label_place_profile'
              >
                Имя
                <input
                  autoComplete='off'
                  required
                  id='name'
                  name='name'
                  type='text'
                  className={`auth-form__input auth-form__input_place_profile ${
                    !isEditMode ? "auth-form__input_unavailable" : ""
                  }`}
                  defaultValue='Виталий'
                  placeholder='Введите имя'
                />
                <span className='auth-form__focus-point'></span>
              </label>
              <label
                name='email'
                htmlFor='email'
                className='auth-form__label auth-form__label_place_profile'
              >
                E-mail
                <input
                  autoComplete='off'
                  required
                  id='email'
                  name='email'
                  type='email'
                  className={`auth-form__input auth-form__input_place_profile ${
                    !isEditMode ? "auth-form__input_unavailable" : ""
                  }`}
                  defaultValue='pochta@yandex.ru'
                  placeholder='Введите E-mail'
                />
                <span className='auth-form__focus-point'></span>
              </label>
            </fieldset>
            {!isEditMode ? (
              <>
                <button
                  type='button'
                  onClick={() => setIsEditMode(true)}
                  className='link auth-form__link auth-form__link_type_edit'
                >
                  Редактировать
                </button>
                <Link
                  to='/'
                  className='link auth-form__link auth-form__link_type_quit'
                >
                  Выйти из аккаунта
                </Link>
              </>
            ) : (
              <>
                <span className='auth-form__input-error  auth-form__input-error_place_profile auth-form__input-error_visible'>
                  При обновлении профиля произошла ошибка
                </span>
                <button
                  type='submit'
                  className='button auth-form__submit auth-form__submit_place_profile'
                >
                  Сохранить
                </button>
              </>
            )}
          </AuthForm>
        </section>
      </main>
    </>
  );
}
export default Profile;
