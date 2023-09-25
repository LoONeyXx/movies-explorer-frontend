import "../../css/link.css";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright'>
        <p className='footer__date'>© {new Date().getFullYear()}</p>
        <ul className='footer__link-menu'>
          <li className='footer__menu-item'>
            <a
              href='https://practicum.yandex.ru'
              className='link footer__link'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__menu-item'>
            <a
              href='https://github.com/LoONeyXx'
              className='link footer__link'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
