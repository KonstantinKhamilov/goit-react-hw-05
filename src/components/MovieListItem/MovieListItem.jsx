import { Link } from "react-router-dom";

const MovieListItem = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <li>
      <Link to={`/movies/${movie.id}`}>
        <img src={posterUrl} alt={movie.title} width="300" />
        <h3>{movie.title}</h3>
      </Link>
    </li>
  );
};

export default MovieListItem;
