const MovieCast = ({ movie }) => {
  return (
    <div>
      <h2>Актерский состав</h2>
      {movie && <p>Фильм: {movie.title}</p>}
      <ul>
        <li>Actor 1</li>
        <li>Actor 2</li>
        <li>Actor 3</li>
      </ul>
    </div>
  );
};

export default MovieCast;
