import React from "react";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const HomePage = () => {
  const [movieId, setMovieId] = React.useState(550); // default movie ID

  const handleMovieIdChange = (event) => {
    setMovieId(event.target.value);
  };

  return (
    <div>
      <h1>Movie Reviews</h1>
      <form>
        <label>
          Enter Movie ID:
          <input type="number" value={movieId} onChange={handleMovieIdChange} />
        </label>
      </form>
      <MovieReviews movieId={movieId} />
    </div>
  );
};

export default HomePage;
