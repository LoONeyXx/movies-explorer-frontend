import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies = [],
  name = "",
  onSaveMovie,
  onDeleteMovie,
  isSavedMovie,
  isLoading,
}) {
  return (
    <ul className={`movies-card-list movies-card-list_${name}`}>
      {movies.map((movie, index) => (
        <li
          key={movie.id ? movie.id : movie.movieId}
          className={`movies-card-list__item movies-card-list__item_${name}`}
        >
          <MoviesCard
            name={name}
            movie={movie}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            isSavedMovie={isSavedMovie}
            isLoading={isLoading}
          />
        </li>
      ))}
    </ul>
  );
}
export default MoviesCardList;
