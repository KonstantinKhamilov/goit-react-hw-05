const Movie = ({ searchQuery, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for a movie"
      />
      <button>Search</button>
    </div>
  );
};

export default Movie;
