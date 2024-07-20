import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import Navigation from "../components/Navigation";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}`,
        {
          headers: {
            Authorization: "Bearer YOUR_API_READ_ACCESS_TOKEN",
          },
        }
      )
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Navigation />
      <h1>Search Movies</h1>
      <input type="text" value={searchQuery} onChange={handleSearch} />
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
