import { useEffect } from "react";
import "../../css/button.css";
import "./SearchForm.css";
import submitBackground from "../../images/submit.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormAndValidation from "../../hooks/useFormAndValidation";
function SearchForm({
  onSubmitSearch,
  isToggle,
  onToggleOn,
  name = "",
  isLoading,
}) {
  const { values, isValid, handleChangeInput, setValues, setValid } =
    useFormAndValidation({ text: "" });

  useEffect(() => {
    const localValue = localStorage.getItem("query");
    if (localValue && name === "movies") {
      setValid(true);
      setValues({ text: localValue });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    if (name === "movies") {
      localStorage.setItem("query", values.text);
    }
    onSubmitSearch(values.text);
  }
  return (
    <form
      action='#'
      className='search__form'
      onSubmit={handleSubmit}
    >
      <fieldset className='search__fieldset'>
        <input
          name='text'
          type='text'
          className='search__input'
          placeholder='Фильм'
          value={values.text}
          onChange={handleChangeInput}
          required
        />
        <button
          type='submit'
          style={{
            backgroundImage: `url(${submitBackground})`,
          }}
          className={`button search__submit ${
            !isValid || isLoading ? "search__submit_disabled" : ""
          }`}
        />
      </fieldset>

      <FilterCheckbox
        isToggle={isToggle}
        onToggleOn={onToggleOn}
      />
    </form>
  );
}
export default SearchForm;
