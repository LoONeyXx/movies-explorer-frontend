import Authorization from "../Authorization/Authorization";
import AuthForm from "../AuthForm/AuthForm";
import LinkButton from "../LinkButton/LinkButton";
import "./Login.css";

function Login(props) {
  return (
    <main className='login'>
      <Authorization>
        <AuthForm
          name='authorization'
          title='Рады видеть!'
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
                type='email'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введи E-mail'
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
                id='password'
                type='password'
                className='auth-form__input auth-form__input_place_authorization'
                placeholder='Введи пароль'
                required
                autoComplete='off'
                minLength='6'
                maxLength='32'
              />
            </label>
          </fieldset>

          <span className='auth-form__input-error auth-form__input-error_place_authorization'>
            При авторизации произошла ошибка. Токен не передан или
            передан не в том формате
          </span>
          <button
            type='submit'
            className='button auth-form__submit auth-form__submit_place_login'
          >
            Войти
          </button>
        </AuthForm>
        <p className='authorization__footer-link'>
          Ещё не зарегистрированы?
          <LinkButton
            text='Регистрация'
            path='/signup'
          />
        </p>
      </Authorization>
    </main>
  );
}
export default Login;
