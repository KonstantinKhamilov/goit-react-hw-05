import { useState, useEffect } from "react";
import axios from "axios";

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return; // Добавьте проверку на undefined
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjY1ZTA2Y2RhODA3Mzg5YzEyYWM2OTNkMGE3NTk5OSIsIm5iZiI6MTcyMTQ2ODUwNC45NTI1NDksInN1YiI6IjY2OWFhNGQxNTdhZmY0MTI3NTgzMGExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g7dLvB3y467QwLij6YMRlCbemUxB0w5IOJ91qr6MsoY",
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
