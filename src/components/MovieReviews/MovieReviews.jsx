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
          `https://api.example.com/movies/${movieId}/reviews`
        );
        setReviews(response.data);
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
      ) : (
        reviews.map((review) => (
          <div key={review.id}>
            <p>{review.text}</p>
            <p>Оценка: {review.rating}</p>
          </div>
        ))
      )}
      {error && <p>Ошибка: {error}</p>}
    </div>
  );
};

export default MovieReviews;
