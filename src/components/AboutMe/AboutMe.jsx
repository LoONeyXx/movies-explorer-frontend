import Section from "../Section/Section";
import "../../css/link.css";
import photo from "../../images/photo.jpg";
import "./AboutMe.css";

function AboutMe(props) {
  return (
    <Section
      name='student'
      title='Студент'
    >
      <div className='student'>
        <div className='student__about'>
          <h2 className='student__title'>Виталий</h2>
          <p className='student__subtitle'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='student__description'>
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил
            факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё
            увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как
            прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            href='https://github.com/LoONeyXx'
            className='link student__footer'
          >
            Github
          </a>
        </div>
        <img
          className='student__image'
          src={photo}
          alt='На фотографии изображено фото студента со светлыми волосами и улыбающегося'
        />
      </div>
    </Section>
  );
}
export default AboutMe;
