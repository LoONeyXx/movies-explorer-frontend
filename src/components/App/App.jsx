import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState, useCallback } from "react";

import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NorFoundPage/NorFoundPage";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ApiMovies from "../../utils/MoviesApi";
import { useEffect } from "react";
import ApiMain from "../../utils/MainApi";
import {
  profileErrors,
  registerErrors,
  loginErrors,
} from "../../constants/errors";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useSizeAndMoviesCounter from "../../hooks/useSizeAndMoviesCounter";
import useCurrentUser from "../../hooks/useCurrentUser";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import LandingPage from "../LandingPage/LandingPage";
import { handleFetch, getShortMovies } from "../../utils/utils";
import useSubmitAndPreloader from "../../hooks/useSubmitAndPreloader";
import useFetchAndInfoTool from "../../hooks/useFetchAndInfoTool";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const { currentUser, setCurrentUser, resetUser } = useCurrentUser({
    loggedIn,
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const {
    moviesCounter,
    setStartMoviesCounter,
    setNextMoviesCounter,
    initialRenderMovies,
    setEmptyResult,
    emptyResult,
    resetMovies,
    movies,
  } = useSizeAndMoviesCounter([]);
  const [authError, setAuthError] = useState("");
  const { isLoading, handleSubmit } = useSubmitAndPreloader();
  const {
    successMessage,
    handleFetch: handleFetchSuccess,
    isLoading: isLoadingCardAction,
  } = useFetchAndInfoTool();
  function resetAuthError() {
    setAuthError("");
  }
  function isSavedMovie(id) {
    return savedMovies.some((movie) => movie.movieId === id);
  }
  async function getMovies() {
    try {
      const data = await ApiMovies.getMovies();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async function addMovie(movie) {
    try {
      const data = await ApiMain.addMovie(movie);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async function deleteMovie(id) {
    try {
      const { _id } = savedMovies.find(
        (movie) => movie.movieId === id,
      );
      await ApiMain.deleteMovie(_id);
    } catch (error) {
      throw error;
    }
  }
  async function getSavedMovies() {
    try {
      const data = await ApiMain.getMovies();
      return data;
    } catch (error) {
      throw error;
    }
  }

  function handleBack() {
    console.log("sd");
    navigate(-1);
  }
  const validationUser = useCallback(async () => {
    try {
      const { data: user } = await ApiMain.validation();
      setCurrentUser(user);
      setLoggedIn(true);
      return user;
    } catch (error) {
      setLoggedIn(false);
      throw error;
    }
  }, [setCurrentUser]);

  async function updateUserInfo(info) {
    try {
      const { data } = await ApiMain.updateUser(info);
      return data;
    } catch (error) {
      throw error;
    }
  }

  const checkLocalStorage = useCallback(() => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      const movieList = JSON.parse(movies);
      const allMovies = localStorage.getItem("allMovies");
      const allMoviesList = JSON.parse(allMovies);
      setAllMovies(allMoviesList);
      initialRenderMovies(movieList);
    }
  }, [initialRenderMovies]);

  const renderSavedMovies = useCallback(() => {
    async function request() {
      const { data: savedMovies } = await getSavedMovies();
      setSavedMovies(savedMovies);
    }
    handleFetch(request);
  }, [setSavedMovies]);

  function checkToken() {
    async function makeRequest() {
      await validationUser();
      checkLocalStorage();
      if (
        location.pathname === "/signup" ||
        location.pathname === "/signin"
      ) {
        navigate("/", { replace: true });
        return;
      }
      navigate(location.pathname, { replace: true });
    }
    handleFetch(makeRequest);
  }

  function handleSubmitProfile(info) {
    async function request() {
      let data;
      const isItSameValues =
        info.name === currentUser.name &&
        info.email === currentUser.email;
      try {
        if (isItSameValues) {
          setIsEditMode(false);
          return;
        } else {
          data = await updateUserInfo(info);
          setCurrentUser(data);
          setIsEditMode(false);
        }
      } catch (error) {
        if (profileErrors[error.message]) {
          setAuthError(profileErrors[error.message]);
        } else {
          setAuthError("На сервере произошла ошибка");
        }
        throw error;
      }
    }
    handleFetchSuccess(request, "Данные успешно обновлены");
  }

  function handleLogout() {
    async function makeRequest() {
      await ApiMain.logout();
      localStorage.removeItem("movies");
      localStorage.removeItem("query");
      localStorage.removeItem("allMovies");
      setLoggedIn(false);
      resetMovies();
      resetUser();
      setAllMovies([]);
    }
    handleFetch(makeRequest);
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loggedIn) {
      renderSavedMovies();
    }
  }, [loggedIn, renderSavedMovies]);

  function handleLogin(info) {
    async function makeRequest() {
      try {
        await ApiMain.authorization(info);
        await validationUser();
        navigate("/movies", { replace: true });
      } catch (error) {
        if (loginErrors[error.message]) {
          setAuthError(loginErrors[error.message]);
        } else {
          setAuthError("На сервере произошла ошибка");
        }
        throw error;
      }
    }
    handleSubmit(makeRequest);
  }

  function handleRegistartion(info) {
    async function makeRequest() {
      try {
        await ApiMain.registration(info);
        handleLogin(info);
      } catch (error) {
        if (registerErrors[error.message]) {
          setAuthError(registerErrors[error.message]);
        } else {
          setAuthError("На сервере произошла ошибка");
        }
        throw error;
      }
    }
    handleSubmit(makeRequest);
  }

  function handleSaveMovie(movie) {
    async function makeRequest() {
      const { data: newMovie } = await addMovie(movie);
      setSavedMovies((prev) => [...prev, newMovie]);
    }
    handleFetchSuccess(makeRequest, "Фильм успешно добавлен");
  }

  function getFiltredMovies(keyword, movies) {
    const filtredMovies = movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().match(keyword.toLowerCase()) ||
        movie.nameEN.toLowerCase().match(keyword.toLocaleLowerCase()),
    );

    return filtredMovies;
  }

  function handleSubmitSearchMovies(keyword = "", isToggle) {
    async function makeRequest() {
      try {
        let data;
        if (allMovies.length > 0) {
          data = allMovies;
        } else {
          data = await getMovies();
          setAllMovies(data);
          localStorage.setItem("allMovies", JSON.stringify(data));
        }

        const filtredMovies = getFiltredMovies(keyword, data);
        initialRenderMovies(filtredMovies);
        if (isToggle) {
          const shortMovies = getShortMovies(filtredMovies);
          setStartMoviesCounter(shortMovies);
        }
        localStorage.setItem("movies", JSON.stringify(filtredMovies));
      } catch (error) {
        setEmptyResult(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
        );
        throw error;
      }
    }
    handleSubmit(makeRequest);
  }

  function handleDeleteMovie(id) {
    async function makeRequest() {
      await deleteMovie(id);
      setSavedMovies((prev) =>
        prev.filter((movie) => movie.movieId !== id),
      );
    }
    handleFetchSuccess(makeRequest, "Фильм успешно удален");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Routes>
          (
          <Route
            path='/signin'
            element={
              <Login
                isLoading={isLoading}
                onLink={resetAuthError}
                authError={authError}
                onSubmit={handleLogin}
              />
            }
          />
          ) (
          <Route
            path='/signup'
            element={
              <Register
                isLoading={isLoading}
                onLink={resetAuthError}
                authError={authError}
                onSubmit={handleRegistartion}
              />
            }
          />
          )
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                redirectPath='/signin'
                loggedIn={loggedIn}
                element={
                  <Profile
                    authError={authError}
                    isEditMode={isEditMode}
                    successMessage={successMessage}
                    onEditButton={setIsEditMode}
                    onSubmit={handleSubmitProfile}
                    onLogout={handleLogout}
                    resetError={resetAuthError}
                    isLoading={isLoading}
                  />
                }
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                element={
                  <SavedMovies
                    renderMovies={renderSavedMovies}
                    onSaveMovie={handleSaveMovie}
                    movies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    isLoading={isLoadingCardAction}
                    successMessage={successMessage}
                  />
                }
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                element={
                  <Movies
                    onDelete={handleDeleteMovie}
                    onSaveMovie={handleSaveMovie}
                    movies={movies}
                    isLoading={isLoading}
                    isLoadingCardAction={isLoadingCardAction}
                    isSavedMovie={isSavedMovie}
                    onSubmitSearch={handleSubmitSearchMovies}
                    moviesCounter={moviesCounter}
                    onMore={setNextMoviesCounter}
                    onToggleOn={setStartMoviesCounter}
                    emptyResult={emptyResult}
                    succesMessage={successMessage}
                  />
                }
              />
            }
          />
          <Route
            path='/'
            element={<LandingPage />}
          />
          <Route
            path='/*'
            element={<NotFoundPage onBack={handleBack} />}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
