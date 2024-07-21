import { useState } from "react";
import { Link } from "react-router-dom";
import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c665e06cda807389c12ac693d0a75999&query=${searchQuery}`
      );
      const data = await response.json();
      setMovies(data.results);
      setSearchResult(data.results.length > 0);
    } catch (error) {
      console.error(error);
      setSearchResult(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Поиск</button>
      {searchResult === null ? (
        <p>Введите запрос и нажмите кнопку Поиск</p>
      ) : searchResult ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default Movies;
