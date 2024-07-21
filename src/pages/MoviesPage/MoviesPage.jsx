import MovieReviews from "../components/MovieReviews";

const MoviesPage = ({ movies }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <MovieReviews movieId={movie.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
