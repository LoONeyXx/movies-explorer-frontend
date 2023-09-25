import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { initialMovies } from "../../constants/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header />
      <main className='movies'>
        <section className='search'>
          <SearchForm />
        </section>
        <section className='movie-cards'>
          <MoviesCardList
            name='saved-movies'
            movies={[
              initialMovies[0],
              initialMovies[1],
              // initialMovies[2],
            ]}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
export default SavedMovies;
