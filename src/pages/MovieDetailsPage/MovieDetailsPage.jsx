import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import MovieReviews from "../components/MovieReviews";

const MovieDetailsPage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${match.params.movieId}?language=en-US`,
        {
          headers: {
            Authorization: "Bearer YOUR_API_READ_ACCESS_TOKEN",
          },
        }
      )
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [match.params.movieId]);

  return (
    <div>
      <Navigation />
      <h1>{movie.title}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <MovieReviews movieId={match.params.movieId} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
