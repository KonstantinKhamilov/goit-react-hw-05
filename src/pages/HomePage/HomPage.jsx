import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import Navigation from "../components/Navigation";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie?include_adult=false&language=en-US&page=1",
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
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Trending Movies</h1>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
