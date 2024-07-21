import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigations";
import MovieCast from "../MovieCast/MovieCast";
import Movies from "../../components/Navigation/Movies/Movies";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Поиск фильма по его названию
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c665e06cda807389c12ac693d0a75999&query=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data.results[0]));
  };

  useEffect(() => {
    if (movie) {
      // Получаем актерский состав фильма с помощью API
      fetch(`https://api.example.com/movie/${movie.id}/cast`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [movie]);

  return (
    <div>
      <Navigation />
      <h1>Фильмы</h1>

      {movie && <MovieCast movie={movie} />}
      <Movies searchQuery={searchQuery} handleSearch={handleSearch} />
    </div>
  );
};

export default MoviesPage;
