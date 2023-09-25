import API from "./API";

class MoviesApi extends API {
  getMovies() {
    return this._request();
  }
}

const ApiMovies = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies/",
});
export default ApiMovies;
