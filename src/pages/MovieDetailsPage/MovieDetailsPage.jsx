import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/Navigation/Navigations";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [movieData, setMovieData] = useState({}); // состояние для хранения данных фильма
  const [creditsData, setCreditsData] = useState({}); // состояние для хранения данных о составе
  const [showCast, setShowCast] = useState(false); // состояние для отображения состава
  const [showReview, setShowReview] = useState(false); // состояние для отображения рецензий

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=c665e06cda807389c12ac693d0a75999`
      )
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c665e06cda807389c12ac693d0a75999`
      )
      .then((response) => {
        setCreditsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);

  if (!movieData) {
    return <div>Загрузка...</div>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;

  const handleCastClick = () => {
    setShowCast(true);
    setShowReview(false);
  };

  const handleReviewClick = () => {
    setShowCast(false);
    setShowReview(true);
  };

  return (
    <div>
      <Navigation />
      <h1>{movieData.title}</h1>
      <img src={posterUrl} alt={movieData.title} />
      <ul>
        <li>
          <strong>Год выпуска:</strong>{" "}
          {movieData.release_date ? movieData.release_date.split("-")[0] : ""}
        </li>
        <li>
          <strong>Рейтинг:</strong>{" "}
          {movieData.vote_average ? movieData.vote_average * 10 : 0}%
        </li>
        <li>
          <strong>Краткое описание:</strong> {movieData.overview}
        </li>
        <li>
          <strong>Жанр:</strong>{" "}
          {movieData.genres
            ? movieData.genres.map((genre) => genre.name).join(", ")
            : ""}
        </li>
      </ul>
      <button onClick={handleCastClick}>CAST</button>
      <button onClick={handleReviewClick}>REVIEWS</button>

      {showCast && (
        <div>
          <h3>CAST:</h3>
          <ul>
            {creditsData.cast.map((actor) => (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <span>{actor.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showReview && (
        <div>
          <h3>REVIEWS:</h3>
          <MovieReviews movieId={movieId} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
