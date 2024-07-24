import { useState, useEffect } from "react";

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=c665e06cda807389c12ac693d0a75999`
    )
      .then((response) => response.json())
      .then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <h2>Рецензии</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
