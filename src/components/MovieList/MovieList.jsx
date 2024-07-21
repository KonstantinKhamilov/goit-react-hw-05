import { Link } from "react-router-dom";

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button onClick={() => onMovieSelect(movie.id)}>Select</button>
          <Link to={`/movies/${movie.id}`}>View details</Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
