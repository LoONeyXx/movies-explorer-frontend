import { useContext, useEffect } from "react";
import "../../css/link.css";
import "../../css/button.css";
import "./Profile.css";
import Header from "../Header/Header";
import AuthForm from "../AuthForm/AuthForm";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { nameRegEx } from "../../constants/constants";

function Profile({
  authError,
  onEditButton,
  isEditMode,
  onSubmit,
  onLogout,
  successMessage,
  resetError,
  isLoading,
}) {
  const {
    values,
    handleChangeInput,
    setValues,
    errorMessages,
    isValid,
  } = useFormAndValidation(
    {
      name: "",
      email: "",
    },
    true,
  );
  const currentUser = useContext(CurrentUserContext);

  const isTheSameValues =
    currentUser.name === values.name &&
    currentUser.email === values.email;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }
  useEffect(() => {
    onEditButton(false);
    resetError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleEditButton() {
    onEditButton(true);
  }

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, setValues]);

  return (
    <>
      <Header />
      <main className='profile-content'>
        <section className='profile'>
          <AuthForm
            name='profile'
            title={`Привет, ${currentUser.name}`}
            onSubmit={handleSubmit}
          >
            <fieldset
              disabled={!isEditMode}
              className='auth-form__fieldset auth-form__fieldset_place_profile'
            >
              <span
                className={`auth-form__input-error ${
                  errorMessages.name
                    ? "auth-form__input-error_visible"
                    : ""
                }`}
              >
                {errorMessages.name}
              </span>
              <label
                name='name'
                htmlFor='name'
                className='auth-form__label auth-form__label_place_profile'
              >
                Имя
                <input
                  autoComplete='off'
                  onChange={handleChangeInput}
                  required
                  id='name'
                  name='name'
                  pattern={nameRegEx}
                  type='text'
                  className={`auth-form__input auth-form__input_place_profile ${
                    !isEditMode ? "auth-form__input_unavailable" : ""
                  }`}
                  value={values.name}
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
                  pattern='[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z0-9_\-]{2,4}$'
                  onChange={handleChangeInput}
                  required
                  id='email'
                  name='email'
                  type='email'
                  className={`auth-form__input auth-form__input_place_profile ${
                    !isEditMode ? "auth-form__input_unavailable" : ""
                  }`}
                  value={values.email}
                  placeholder='Введите E-mail'
                />
                <span className='auth-form__focus-point'></span>
              </label>
              <span
                className={`auth-form__input-error ${
                  errorMessages.email
                    ? "auth-form__input-error_visible"
                    : ""
                }`}
              >
                {errorMessages.email}
              </span>
            </fieldset>
            <div
              className={`info-tooltip ${
                successMessage ? "info-tooltip_active" : ""
              } `}
            >
              {successMessage}
            </div>
            {!isEditMode ? (
              <>
                <button
                  type='button'
                  onClick={handleEditButton}
                  className='link auth-form__link auth-form__link_type_edit'
                >
                  Редактировать
                </button>
                <Link
                  to='/'
                  onClick={onLogout}
                  className='link auth-form__link auth-form__link_type_quit'
                >
                  Выйти из аккаунта
                </Link>
              </>
            ) : (
              <>
                <span
                  className={`auth-form__auth-error  auth-form__auth-error_place_profile ${
                    authError ? "auth-form__auth-error_visible" : ""
                  }`}
                >
                  {authError}
                </span>

                <button
                  type='submit'
                  disabled={!isValid || isTheSameValues || isLoading}
                  className={`button auth-form__submit auth-form__submit_place_profile ${
                    !isValid || isTheSameValues || isLoading
                      ? "auth-form__submit_disabled"
                      : ""
                  }`}
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
