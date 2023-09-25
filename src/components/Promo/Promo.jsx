import React from "react";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";
function Promo(props) {
  return (
    <section className='promo'>
      <div className='promo__title-zone'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav className='promo__menu'>
          <ul className='promo__menu-list'>
            <li className='promo__menu-item'>
              <NavTab
                idAnchor='about'
                text='О проекте'
              />
            </li>
            <li className='promo__menu-item'>
              <NavTab
                idAnchor='techs'
                text='Технологии'
              />
            </li>
            <li className='promo__menu-item'>
              <NavTab
                idAnchor='student'
                text='Студент'
              />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default Promo;
