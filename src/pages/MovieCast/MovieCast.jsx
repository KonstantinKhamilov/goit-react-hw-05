import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieCast = ({ movie }) => {
  return (
    <div>
      <h2>Movie Cast</h2>
      <MovieReviews movieId={movie.id} />
    </div>
  );
};

export default MovieCast;
