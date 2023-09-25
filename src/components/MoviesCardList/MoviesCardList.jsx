import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies = [],
  name = "",
  onSaveMovie,
  onDeleteMovie,
  isSavedMovie,
}) {
  return (
    <ul className={`movies-card-list movies-card-list_${name}`}>
      {movies.map((movie, index) => (
        <li
          key={index}
          className={`movies-card-list__item movies-card-list__item_${name}`}
        >
          <MoviesCard
            name={name}
            movie={movie}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            isSavedMovie={isSavedMovie}
          />
        </li>
      ))}
    </ul>
  );
}
export default MoviesCardList;
