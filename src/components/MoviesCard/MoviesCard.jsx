import "../../css/button.css";
import "./MoviesCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import deletCardIcon from "../../images/deleteCard.svg";
import savedCardIcon from "../../images/saved-card.svg";
import { useContext } from "react";
function MoviesCard({
  movie,
  name,
  onSaveMovie = null,
  onDeleteMovie = null,
  isSavedMovie = null,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isSaved = isSavedMovie ? isSavedMovie(movie.id) : true;
  const isOwnMovie = movie.owner === currentUser._id;
  function handleSaveMovie() {
    onSaveMovie({
      country: movie.country,
      director: movie.director,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      owner: currentUser._id,
      movieId: movie.id,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    });
  }

  function handleDeleteMovie(e) {
    e.stopPropagation();
    if (name === "movies") {
      onDeleteMovie(movie.id);
    } else {
      onDeleteMovie(movie.movieId);
    }
  }
  return (
    <figure className='movies-card'>
      <a
        className='movies-card__link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={
            name === "movies"
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          className='movies-card__image'
          alt={movie.description}
        />
      </a>
      {isOwnMovie && (
        <button
          style={{
            backgroundImage: `url(${deletCardIcon})`,
          }}
          type='button'
          onClick={handleDeleteMovie}
          className='button movies-card__button movies-card__button_type_close movies-card__button_status_saved'
        ></button>
      )}
      {name === "movies" && (
        <>
          {isSaved ? (
            <button
              type='button'
              onClick={handleDeleteMovie}
              style={{
                backgroundImage: `url(${savedCardIcon})`,
              }}
              className='button movies-card__button movies-card__button_status_saved'
            ></button>
          ) : (
            <button
              onClick={handleSaveMovie}
              type='button'
              className='button movies-card__button movies-card__button_status_save'
            >
              Сохранить
            </button>
          )}
        </>
      )}

      <figcaption className='movies-card__title-zone'>
        <h2 className='movies-card__title'>{movie.nameRU}</h2>
        <div className='movies-card__duration'>{`${Math.floor(
          movie.duration / 60,
        )}ч ${movie.duration % 60} м`}</div>
      </figcaption>
    </figure>
  );
}
export default MoviesCard;
