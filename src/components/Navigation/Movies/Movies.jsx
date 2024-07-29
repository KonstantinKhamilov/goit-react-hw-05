// moviesApi.js
const API_URL = "https://api.themoviedb.org/3/trending/movie/week";
const API_KEY = "c665e06cda807389c12ac693d0a75999";

const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getTrendingMovies };
