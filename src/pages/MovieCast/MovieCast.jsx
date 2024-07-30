import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c665e06cda807389c12ac693d0a75999`
      )
        .then((response) => response.json())
        .then((data) => {
          setCast(data.cast);
        })
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    }
  }, [movieId]);

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
