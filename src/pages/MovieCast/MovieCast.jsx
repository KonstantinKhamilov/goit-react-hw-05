import { useState, useEffect } from "react";

const MovieCast = ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movie) {
      // Получаем актерский состав фильма с помощью API
      fetch(`https://api.example.com/movie/${movie.id}/cast`)
        .then((response) => response.json())
        .then((data) => setCast(data));
    }
  }, [movie]);

  return (
    <div>
      <h2>Актерский состав</h2>
      {movie && <p>Фильм: {movie.title}</p>}
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
