import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieCast = ({ movie }) => {
  return (
    <div>
      <h2>Актерский состав</h2>
      <MovieReviews movieId={movie.id} />
    </div>
  );
};

export default MovieCast;
