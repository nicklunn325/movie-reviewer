function MovieCard({ movie }) {
  console.log(movie.title);
  return (
    <div id="movie-card">
      <img src={movie.image}></img>
      <h4>{movie.title}</h4>
    </div>
  );
}

export default MovieCard;
