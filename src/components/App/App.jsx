import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NorFoundPage/NorFoundPage";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { LoginContext } from "../../contexts/LoginContext";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function App() {
  return (
    <LoginContext.Provider value={true}>
      <div className='App'>
        <Routes>
          <Route
            path='/signin'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<Register />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/saved-movies'
            element={<SavedMovies />}
          />
          <Route
            path='/movies'
            element={<Movies />}
          />
          <Route
            path='/'
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/*'
            element={<NotFoundPage />}
          />
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
