import { useState } from "react";
import Navigation from "../../components/Navigation/Navigations";
import MoviesCast from "../MovieCast/MovieCast";
import Movies from "../../components/Navigation/Movies/Movies";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Фильмы</h1>
      <Navigation />
      <MoviesCast />
      <Movies searchQuery={searchQuery} handleSearch={handleSearch} />
    </div>
  );
};

export default MoviesPage;
