import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("useEffect сработал!");
    const movieFromState = location.state.movie;
    if (movieFromState) {
      setMovie(movieFromState);
    } else {
      if (id) {
        console.log("id:", id);
        console.log("Тип id:", typeof id);
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c665e06cda807389c12ac693d0a75999`
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
  }, [id]); // пустой массив зависимостей

  const handleBackClick = () => {
    navigate(-1);
  };

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
          <button onClick={handleBackClick}>Назад</button>
          {movie && (
            <div>
              <NavLink to={`/movies/${id}/cast`} state={{ movieId: id }}>
                Актеры
              </NavLink>
              <NavLink to={`/movies/${id}/reviews`} state={{ movieId: id }}>
                Отзывы
              </NavLink>
            </div>
          )}
          <Outlet context={{ movieId: id }} />
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
