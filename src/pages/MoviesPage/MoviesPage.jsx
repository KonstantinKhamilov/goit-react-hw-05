import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

const MoviesPage = ({ movies }) => {
  return (
    <div>
      <h2>Фильмы</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <MovieDetailsPage movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
