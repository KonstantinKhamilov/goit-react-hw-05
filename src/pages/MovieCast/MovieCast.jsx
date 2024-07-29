import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  console.log("MovieCast component rendered");
  console.log(movieId);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c665e06cda807389c12ac693d0a75999`
    )
      .then((response) => {
        console.log("Response:", response); // добавьте эту строку
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data); // добавьте эту строку
        setCast(data.cast);
      })
      .catch((error) => {
        console.log("Error:", error); // добавьте эту строку
        setError(error);
      });
  }, [movieId]);

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  if (cast.length === 0) {
    return <p>Нет данных об актёрах</p>;
  }

  return (
    <div>
      <h2>Актерский состав</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
