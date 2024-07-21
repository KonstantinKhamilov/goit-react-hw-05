import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NavLink = () => {
  const [тrendingMovies, setТrendingMovies] = useState([]);

  useEffect(() => {
    const fetchТrendingMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=c665e06cda807389c12ac693d0a75999`
      );
      setТrendingMovies(response.data.results);
    };
    fetchТrendingMovies();
  }, []);

  return (
    <ul>
      {тrendingMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
