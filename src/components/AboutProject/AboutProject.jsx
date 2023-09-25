import "./AboutProject.css";
import ProgressTable from "../RoadMap/ProgressTable";
import Section from "../Section/Section";
function AboutProject(props) {
  return (
    <Section
      name='about'
      title='О проекте'
    >
      <div className='about'>
        <div className='about__column'>
          <h3 className='about__column-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about__column-text'>
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about__column'>
          <h3 className='about__column-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about__column-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ProgressTable />
    </Section>
  );
}
export default AboutProject;
