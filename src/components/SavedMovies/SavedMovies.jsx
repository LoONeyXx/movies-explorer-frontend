import { useState } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { getFiltredMovies, getShortMovies } from "../../utils/utils";
import EmptyResult from "../EmptyResult/EmptyResult";

function SavedMovies({ movies, onDeleteMovie }) {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [emptyResult, setEmptyResult] = useState("");

  useEffect(() => {
    setSavedMovies(movies);
  }, [movies]);

  const shortMovies = getShortMovies(savedMovies);

  function handleSubmit(value) {
    const filtredMovies = getFiltredMovies(value, movies);
    if (filtredMovies.length === 0) {
      setEmptyResult("Ничего не найдено");
      return;
    }
    setEmptyResult("");
    setSavedMovies(filtredMovies);
  }

  function handleToogle(e) {
    if (e.target.checked) {
      setIsToggleOn(true);
    } else {
      setIsToggleOn(false);
    }
  }
  return (
    <>
      <Header />
      <main className='movies'>
        <section className='search'>
          <SearchForm
            isToggle={isToggleOn}
            onToggleOn={handleToogle}
            onSubmitSearch={handleSubmit}
          />
        </section>
        <section className='movie-cards'>
          {emptyResult ? (
            <EmptyResult emptyText='Ничего не найдено' />
          ) : (
            <MoviesCardList
              name='saved-movies'
              movies={!isToggleOn ? savedMovies : shortMovies}
              onDeleteMovie={onDeleteMovie}
            />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
export default SavedMovies;
