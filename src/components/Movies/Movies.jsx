import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { initialMovies } from "../../constants/constants";
import MoreButton from "../MoreButton/MoreButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Movies(props) {
  return (
    <>
      <Header />
      <main className='movies'>
        <section className='search'>
          <SearchForm />
        </section>
        <section className='card-movies'>
          <MoviesCardList
            name='movies'
            movies={initialMovies}
          />
        </section>
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}
export default Movies;
