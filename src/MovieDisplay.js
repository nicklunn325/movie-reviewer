import ReviewForm from "./ReviewForm";
import { useState, useEffect } from "react";
import Review from "./Review";
function MovieDisplay({ movie, setDisplayMovieList }) {
  const [reviews, setReviews] = useState([]);

  function fetchReviews() {
    fetch(`http://localhost:3000/movies/${movie.id}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }

  useEffect(fetchReviews, []);

  const renderReviews = reviews.map((review) => {
    return <Review review={review} />;
  });

  function updateReviews(review) {
    setReviews((prevState) => [...prevState, review]);
  }
  return (
    <div>
      <h1>{movie.title}</h1>
      <h3>Released: {movie.release}</h3>
      <p>{movie.description}</p>
      <img src={movie.image} />
      {renderReviews}

      <ReviewForm updateReviews={updateReviews} movieId={movie.id} />
      <button
        onClick={() => {
          setDisplayMovieList(true);
        }}
      >
        Back to Movie List!
      </button>
    </div>
  );
}

export default MovieDisplay;
