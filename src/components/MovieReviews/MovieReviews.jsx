import { useState, useEffect } from "react";
import axios from "axios";

const MovieReviews = ({ movieId }) => {
  const [setReviews] = useState([]);
  const [setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return; // Проверка на undefined
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        {
          headers: {
            Authorization: "c665e06cda807389c12ac693d0a75999",
          },
        }
      )
      .then((response) => {
        setReviews(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  });

  return <div>Отзывы фильма</div>;
};

export default MovieReviews;
