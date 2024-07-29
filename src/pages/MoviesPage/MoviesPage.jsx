import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "./Loader";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchQuery(query);
      fetchMovies(query);
    }
  }, [searchParams]);

  const handleSearch = async () => {
    const query = searchQuery.trim();
    if (query) {
      setSearchParams({ query });
      await fetchMovies(query);
    }
  };

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c665e06cda807389c12ac693d0a75999&query=${query}`
      );
      const data = response.data;
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie) => {
    navigate(`/movies/${movie.id}`, { from: navigate.location });
  };

  return (
    <div>
      <input
        type="text"
        name="search-query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Введите название фильма"
      />
      <button onClick={handleSearch}>Поиск</button>
      {loading ? (
        <Loader />
      ) : searchResults.length ? (
        <MovieList movies={searchResults} onMovieClick={handleMovieClick} />
      ) : (
        <p>Введите запрос и нажмите кнопку Поиск</p>
      )}
    </div>
  );
};

export default MoviesPage;
