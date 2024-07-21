import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // или другой HTTP-клиент

const MovieDetailsPage = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [movieData, setMovieData] = useState({}); // состояние для хранения данных фильма

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
  }, [movieId]);

  if (!movieData) {
    return <div>Загрузка...</div>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;

  return (
    <div>
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
    </div>
  );
};

export default MovieDetailsPage;
