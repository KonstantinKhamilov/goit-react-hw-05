import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=c665e06cda807389c12ac693d0a75999`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  const handleCastClick = () => {
    setShowCast(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(true);
    setShowCast(false);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Год выпуска: {movie.release_date}</p>
      <p>Описание: {movie.overview}</p>
      <p>Директор: {movie.director}</p>
      <button onClick={handleCastClick}>Каст</button>
      <button onClick={handleReviewsClick}>Ревьюз</button>
      {showCast && <MovieCast movieId={movieId} />}
      {showReviews && <MovieReviews movieId={movieId} />}
    </div>
  );
};

export default MovieDetailsPage;
