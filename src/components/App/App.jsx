import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <MoviesPage />
            </>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <>
              <MovieDetailsPage />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <NotFoundPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
