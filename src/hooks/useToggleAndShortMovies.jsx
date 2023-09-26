import { useState } from "react";
import { useMemo } from "react";
function useToggleAndShortMovies({ movies }) {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const shortMovies = useMemo(
    () => movies.filter((movie) => movie.duration < 40),
    [movies],
  );

  function switchToggle(e) {
    if (e.target.checked) {
      setIsToggleOn(true);
    } else {
      setIsToggleOn(false);
    }
  }
  return { switchToggle, isToggleOn, setIsToggleOn, shortMovies };
}
export default useToggleAndShortMovies;
