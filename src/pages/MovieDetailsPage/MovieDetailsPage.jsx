import MovieCast from "../MovieCast/MovieCast";

const MovieDetailsPage = ({ movie }) => {
  return (
    <div>
      <h2>Детали фильма</h2>
      <MovieCast movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
