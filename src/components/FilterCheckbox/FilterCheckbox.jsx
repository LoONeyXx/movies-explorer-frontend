import React from "react";
import "../../css/button.css";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <label
      htmlFor='filtred'
      className='filter-checkbox'
    >
      <input
        id='filtred'
        value='filtred'
        type='checkbox'
        className='button filter-checkbox__input'
      />
      Короткометражки
    </label>
  );
}
export default FilterCheckbox;
