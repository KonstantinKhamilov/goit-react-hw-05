/*import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c665e06cda807389c12ac693d0a75999&query=${searchQuery}`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setMovies(data.results);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
      ) : movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default MoviesPage;
*/
