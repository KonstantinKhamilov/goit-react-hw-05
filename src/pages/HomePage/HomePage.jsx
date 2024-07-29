// HomePage.js
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../components/Navigation/Movies/Movies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Добро пожаловать на домашнюю страницу!</h1>
      {error ? (
        <p>Ошибка: {error.message}</p>
      ) : (
        <MovieList movies={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;
