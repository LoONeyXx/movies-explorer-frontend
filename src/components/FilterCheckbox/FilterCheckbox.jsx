import "../../css/button.css";
import "./FilterCheckbox.css";

function FilterCheckbox({ onToggleOn, isToggle }) {
  return (
    <label
      htmlFor='filtred'
      className='filter-checkbox'
    >
      <input
        id='filtred'
        value='filtred'
        type='checkbox'
        onChange={onToggleOn}
        className='button filter-checkbox__input'
        checked={isToggle}
      />
      Короткометражки
    </label>
  );
}
export default FilterCheckbox;
