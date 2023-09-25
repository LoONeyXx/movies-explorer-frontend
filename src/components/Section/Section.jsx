import React from "react";
import "./Section.css";

function Section({ name, children, title }) {
  return (
    <section
      id={`${name}`}
      className={`section section_${name}`}
    >
      <h2 className='section__title'>{title}</h2>
      {children}
    </section>
  );
}
export default Section;
