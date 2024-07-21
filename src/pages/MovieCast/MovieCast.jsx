import MovieReviews from "../components/MovieReviews";

const MovieCast = ({ movie }) => {
  return (
    <div>
      <h2>Movie Cast</h2>
      <MovieReviews movieId={movie.id} />
    </div>
  );
};

export default MovieCast;
