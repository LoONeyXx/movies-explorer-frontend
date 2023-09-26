import API from "./API";

class MainApi extends API {
  authorization({ password, email }) {
    return this._request("/signin", {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        password,
        email,
      }),
    });
  }
  registration(info) {
    return this._request("/signup", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(info),
    });
  }

  validation() {
    return this._request("/users/me", {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }
  logout() {
    return this._request("/logout", {
      headers: this._headers,
      credentials: "include",
    });
  }
  getUser() {
    this._request("/users/me", {
      headers: this._headers,
      credenetials: "include",
    });
  }
  updateUser({ email, name }) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getMovies() {
    return this._request("/movies", {
      headers: this._headers,
      credentials: "include",
    });
  }
  addMovie(movie = {}) {
    return this._request("/movies", {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(movie),
    });
  }
  deleteMovie(id) {
    return this._request(`/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    });
  }
}

const ApiMain = new MainApi({
  baseUrl: "https://api.moovielooney.nomoredomainsicu.ru",
});
export default ApiMain;
