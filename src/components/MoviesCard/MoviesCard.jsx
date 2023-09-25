import "../../css/button.css";
import "./MoviesCard.css";
import deletCardIcon from "../../images/deleteCard.svg";
import savedCardIcon from "../../images/saved-card.svg";
import { useState } from "react";
function MoviesCard({ movie, name }) {
  const [isSaved, setIsSaved] = useState(false);
  console.log(movie);
  return (
    <figure className='movies-card'>
      <img
        src={movie?.image}
        className='movies-card__image'
        alt={movie?.title}
      />
      {name === "saved-movies" && (
        <button
          style={{
            backgroundImage: `url(${deletCardIcon})`,
          }}
          type='button'
          className='button movies-card__button movies-card__button_type_close movies-card__button_status_saved'
        ></button>
      )}
      {name === "movies" && (
        <>
          {isSaved ? (
            <button
              type='button'
              style={{
                backgroundImage: `url(${savedCardIcon})`,
              }}
              onClick={() => setIsSaved(false)}
              className='movies-card__button movies-card__button_status_saved'
              disabled
            ></button>
          ) : (
            <button
              onClick={() => setIsSaved(true)}
              type='button'
              className='button movies-card__button movies-card__button_status_save'
            >
              Сохранить
            </button>
          )}
        </>
      )}

      <figcaption className='movies-card__title-zone'>
        <h2 className='movies-card__title'>{movie?.title}</h2>
        <div className='movies-card__duration'>{movie?.duration}</div>
      </figcaption>
    </figure>
  );
}
export default MoviesCard;
