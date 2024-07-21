import { useState, useEffect } from "react";
import axios from "axios"; // или другой HTTP-клиент

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=c665e06cda807389c12ac693d0a75999`
        );
        setReviews(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Отзывы</h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : reviews.length === 0 ? (
        <p>Нет отзывов к этому фильму</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id}>
            <p>{review.content}</p>
            <p>Оценка: {review.author_details.rating}</p>
          </div>
        ))
      )}
      {error && <p>Ошибка: {error}</p>}
    </div>
  );
};

export default MovieReviews;
