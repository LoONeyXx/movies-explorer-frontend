import Section from "../Section/Section";
import "./Techs.css";

function Techs(props) {
  return (
    <Section
      name='techs'
      title='Технологии'
    >
      <div className='techs'>
        <h2 className='techs__title'>7 технологии</h2>
        <p className='techs__subtitle'>
          На курсе веб-разработки мы освоили технологии, которые
          применили в дипломном проекте.
        </p>
        <ul className='techs__list'>
          <li className='techs__list-item'>HTML</li>
          <li className='techs__list-item'>CSS</li>
          <li className='techs__list-item'>JS</li>
          <li className='techs__list-item'>React</li>
          <li className='techs__list-item'>Git</li>
          <li className='techs__list-item'>Express.js</li>
          <li className='techs__list-item'>mongoDB</li>
        </ul>
      </div>
    </Section>
  );
}
export default Techs;
