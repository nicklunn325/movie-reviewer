function MovieCard({ movie, handleDisplayMovie }) {
  return (
    <div
      id="movie-card"
      onClick={() => {
        handleDisplayMovie(movie);
      }}
    >
      <img src={movie.image}></img>
      <h4>{movie.title}</h4>
    </div>
  );
}

export default MovieCard;
