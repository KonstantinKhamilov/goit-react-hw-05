import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c665e06cda807389c12ac693d0a75999&query=${searchQuery}`
      );
      const data = response.data;
      const results = data.results.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Введите название фильма"
      />
      <button onClick={handleSearch}>Поиск</button>
      {loading ? (
        <p>Загрузка...</p>
      ) : searchQuery ? (
        searchResults.length ? (
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  onClick={() => handleMovieClick(movie)}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <NotFoundPage />
        )
      ) : (
        <p>Введите запрос и нажмите кнопку Поиск</p>
      )}
      {selectedMovie && <MovieCard movie={selectedMovie} />}
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>Год выпуска: {movie.release_date}</p>
      <p>Краткое описание: {movie.overview}</p>
      <div>
        <button>Каст</button>
        <button>Ревьюз</button>
      </div>
    </div>
  );
};

export default MoviesPage;
