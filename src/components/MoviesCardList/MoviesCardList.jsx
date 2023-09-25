import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies = [], name = "" }) {
  return (
      <ul className={`movies-card-list movies-card-list_${name}`}>
        {movies?.length > 0 ? (
          movies.map((movie, index) => (
            <li
              key={index}
              className={`movies-card-list__item movies-card-list__item_${name}`}
            >
              <MoviesCard
                name={name}
                movie={movie}
              />
            </li>
          ))
        ) : (
          <h2 className='movies-card-list__empty'>Пусто</h2>
        )}
      </ul>
  );
}
export default MoviesCardList;
