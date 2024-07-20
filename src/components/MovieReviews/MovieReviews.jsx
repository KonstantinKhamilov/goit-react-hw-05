import { useState, useEffect } from "react";
import axios from "axios";

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
        {
          headers: {
            Authorization: "Bearer YOUR_API_READ_ACCESS_TOKEN",
          },
        }
      )
      .then((response) => {
        setReviews(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
