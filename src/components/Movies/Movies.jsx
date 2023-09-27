import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useCallback, useEffect } from "react";
import useToggleAndShortMovies from "../../hooks/useToggleAndShortMovies";
import Preloader from "../Preloader/Preloader";
import EmptyResult from "../EmptyResult/EmptyResult";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
function Movies({
  movies,
  onSaveMovie,
  isSavedMovie,
  onSubmitSearch,
  moviesCounter,
  onMore,
  onToggleOn,
  isLoading,
  onDelete,
  emptyResult,
  succesMessage,
  isLoadingCardAction,
}) {
  const { isToggleOn, switchToggle, shortMovies, setIsToggleOn } =
    useToggleAndShortMovies({
      movies,
    });
  console.log(succesMessage);
  function handleSubmit(keyword) {
    onSubmitSearch(keyword, isToggleOn);
  }
  useEffect(() => {
    if (localStorage.getItem("isToggle")) {
      const localToggle = !!localStorage.getItem("isToggle");
      setIsToggleOn(localToggle);
      onToggleOn(shortMovies);
      return;
    }
    onToggleOn(movies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToogle = useCallback(
    (e) => {
      if (isToggleOn) {
        onToggleOn(movies);
        localStorage.removeItem("isToggle");
      } else {
        onToggleOn(shortMovies);
        localStorage.setItem("isToggle", true);
      }
      switchToggle(e);
    },
    [isToggleOn, movies, onToggleOn, shortMovies, switchToggle],
  );

  return (
    <>
      <Header />
      <main className='movies'>
        <section className='search'>
          <SearchForm
            isToggle={isToggleOn}
            name='movies'
            onToggleOn={handleToogle}
            onSubmitSearch={handleSubmit}
            isLoading={isLoading}
          />
        </section>
        <InfoToolTip successMessage={succesMessage} />
        {isLoading ? (
          <Preloader />
        ) : emptyResult ? (
          <EmptyResult emptyText={emptyResult} />
        ) : (
          <>
            <section className='card-movies'>
              <MoviesCardList
                isLoading={isLoadingCardAction}
                name='movies'
                movies={
                  !isToggleOn
                    ? movies.slice(0, moviesCounter.visibleMovies)
                    : shortMovies
                }
                onSaveMovie={onSaveMovie}
                isSavedMovie={isSavedMovie}
                onDeleteMovie={onDelete}
              />
            </section>
            {moviesCounter.remainMovies !== 0 && (
              <MoreButton onMore={onMore} />
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
export default Movies;
