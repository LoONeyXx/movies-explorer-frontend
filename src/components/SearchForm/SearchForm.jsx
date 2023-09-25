import React from "react";
import "../../css/button.css";
import "./SearchForm.css";
import submitBackground from "../../images/submit.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
function SearchForm() {
  return (
    <form
      action='#'
      className='search__form'
    >
      <fieldset className='search__fieldset'>
        <input
          type='text'
          className='search__input'
          placeholder='Фильм'
          required
        />
        <button
          type='submit'
          style={{
            backgroundImage: `url(${submitBackground})`,
          }}
          className='button search__submit'
        />
      </fieldset>

      <FilterCheckbox />
    </form>
  );
}
export default SearchForm;
