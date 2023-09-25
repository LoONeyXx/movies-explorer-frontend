import React from "react";
import "./Authorization.css";
import LogoButton from "../LogoButton/LogoButton";
function Authorization({ children }) {
  return (
    <section className='authorization'>
      <LogoButton place='authorization' />
      {children}
    </section>
  );
}
export default Authorization;
