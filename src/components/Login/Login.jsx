import Authorization from "../Authorization/Authorization";
import AuthForm from "../AuthForm/AuthForm";
import LinkButton from "../LinkButton/LinkButton";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import "./Login.css";

function Login({ onLink, authError, onSubmit, isLoading }) {
  const {
    values,
    handleChangeInput,
    isValid,
    resetForm,
    errorMessages,
  } = useFormAndValidation({ email: "", password: "" });

  function handleLink() {
    onLink();
    resetForm();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <main className='login'>
      <Authorization>
        <AuthForm
          name='authorization'
          title='Рады видеть!'
          onSubmit={handleSubmit}
        >
          <fieldset className='auth-form__fieldset auth-form__fieldset_place_authorization'>
            <label
              htmlFor='email'
              className='auth-form__label 
              auth-form__label_place_authorization'
            >
              E-mail
              <input
                name='email'
                id='email'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введи E-mail'
                required
                pattern='[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z0-9_\-]{2,4}$'
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
                id='password'
                type='password'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введи пароль'
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
            className={`button auth-form__submit auth-form__submit_place_login ${
              !isValid || isLoading
                ? "auth-form__submit_disabled"
                : ""
            }`}
          >
            Войти
          </button>
        </AuthForm>
        <p className='authorization__footer-link'>
          Ещё не зарегистрированы?
          <LinkButton
            text='Регистрация'
            path='/signup'
            onLink={handleLink}
          />
        </p>
      </Authorization>
    </main>
  );
}
export default Login;
