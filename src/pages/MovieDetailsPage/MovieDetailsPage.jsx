import { useState, useEffect, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Используйте movieId вместо id
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  // Создайте ссылку на backLink
  const backLink = useRef(location.state?.from ?? "/");
  useEffect(() => {
    console.log("useEffect сработал!");
    const movieFromState = location.state.movie;
    if (movieFromState) {
      setMovie(movieFromState);
    } else {
      if (movieId) {
        console.log("movieId:", movieId);
        console.log("Тип movieId:", typeof movieId);
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=c665e06cda807389c12ac693d0a75999`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Данные получены:", data);
            setMovie(data);
          })
          .catch((error) => {
            console.error("Ошибка:", error);
            // Отобразите сообщение об ошибке
            setMovie(null);
          })
          .finally(() => {
            console.log("Запрос завершен");
          });
      }
    }
  }, [movieId]); // пустой массив зависимостей

  //const handleBackClick = () => {
  //  navigate(backLink.current); // Используйте backLink.current
  //};

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>Год выпуска: {movie.release_date}</p>
          <p>Краткое описание: {movie.overview}</p>
          <Link to={backLink.current}>Назад</Link>
          <div>
            <NavLink to={`/movies/${movieId}/cast`}>Актеры</NavLink>
            <NavLink to={`/movies/${movieId}/reviews`}>Отзывы</NavLink>
          </div>
          <Outlet context={{ movieId: movieId }} />
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
