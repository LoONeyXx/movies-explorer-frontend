import React from "react";
import "../../css/link.css";
import "./Portfolio.css";
import arrowLogo from "../../images/link.svg";
import { Link } from "react-router-dom";

function Portfolio(props) {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link
            to='https://github.com/LoONeyXx/how-to-learn'
            className='link portfolio__link'
            target='_blank'
          >
            {" "}
            Статичный сайт
            <div
              className='link portfolio__link-icon'
              style={{
                backgroundImage: `url(${arrowLogo})`,
              }}
            />
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            to='https://github.com/LoONeyXx/russian-travel'
            target='_blank'
            className='link portfolio__link'
          >
            Адаптивный сайт
            <div
              className='link portfolio__link-icon'
              style={{
                backgroundImage: `url(${arrowLogo})`,
              }}
            />
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            to='https://looneyxx.github.io/print-training/'
            target='_blank'
            className='link portfolio__link'
          >
            Одностраничное приложение
            <div
              className='link portfolio__link-icon'
              style={{
                backgroundImage: `url(${arrowLogo})`,
              }}
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
