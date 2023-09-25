import "./Register.css";
import LinkButton from "../LinkButton/LinkButton";
import AuthForm from "../AuthForm/AuthForm";
import Authorization from "../Authorization/Authorization";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { nameRegEx } from "../../constants/constants";

function Register({ onLink, authError, onSubmit, isLoading }) {
  const {
    values,
    handleChangeInput,
    isValid,
    resetForm,
    errorMessages,
  } = useFormAndValidation({ name: "", password: "", email: "" });

  function handleLink() {
    resetForm();
    onLink();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <main className='register'>
      <Authorization>
        <AuthForm
          title='Добро пожаловать!'
          name='authorization'
          onSubmit={handleSubmit}
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
                pattern={nameRegEx}
                required
                autoComplete='off'
                minLength='2'
                maxLength='32'
                value={values?.name}
                onChange={handleChangeInput}
              />
              <span
                className={`auth-form__input-error auth-form__input-error_place_authorization ${
                  !isValid ? "auth-form__input-error_visible" : ""
                }`}
              >
                {errorMessages.name}
              </span>
            </label>
            <label
              htmlFor='email'
              className='auth-form__label 
              auth-form__label_place_authorization'
            >
              E-mail
              <input
                name='email'
                pattern='[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z0-9_\-]{2,4}$'
                id='email'
                type='email'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введите E-mail'
                required
                autoComplete='off'
                value={values?.email}
                onChange={handleChangeInput}
              />
              <span
                className={`auth-form__input-error auth-form__input-error_place_authorization ${
                  !isValid ? "auth-form__input-error_visible" : ""
                }`}
              >
                {errorMessages.email}
              </span>
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
                value={values?.password}
                onChange={handleChangeInput}
              />
              <span
                className={`auth-form__input-error auth-form__input-error_place_authorization ${
                  !isValid ? "auth-form__input-error_visible" : ""
                }`}
              >
                {errorMessages.password}
              </span>
            </label>
          </fieldset>

          <span
            className={`auth-form__auth-error auth-form__auth-error_place_authorization ${
              authError ? "auth-form__auth-error_visible" : ""
            }`}
          >
            {authError}
          </span>
          <button
            type='submit'
            disabled={!isValid || isLoading}
            className={`button auth-form__submit auth-form__submit_place_register ${
              !isValid || isLoading
                ? "auth-form__submit_disabled"
                : ""
            }`}
          >
            Зарегистрироваться
          </button>
        </AuthForm>
        <p className='authorization__footer-link'>
          Уже зарегистрированы?
          <LinkButton
            text='Войти'
            path='/signin'
            onLink={handleLink}
          />
        </p>
      </Authorization>
    </main>
  );
}
export default Register;
