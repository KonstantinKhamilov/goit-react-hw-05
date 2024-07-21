import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = ({ movie }) => {
  return (
    <div>
      <h2>Movie Details</h2>
      <MovieReviews movieId={movie.id} />
    </div>
  );
};

export default MovieDetailsPage;
