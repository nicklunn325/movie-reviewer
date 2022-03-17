import MovieCard from "./MovieCard.js";
import { useEffect, useState } from "react";

function MovieList() {
  // useState is used to store a variable or data that changes throughout the lifecycle of our program/component
  const [movies, setMovies] = useState([]);
  //   const [reviews, setReviews] = useState([]);
  //   const [user, setUser] = useState(null);
  //   const [name, setName] = useState("Nick");
  //   const [movieId, setMovieId] = useState(1);
  // useEffect executes callback function as soon as component mounts
  useEffect(getMovies, []);

  function getMovies() {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((moviesData) => {
        setMovies(moviesData);
        // movies = moviesData;
        console.log(moviesData);
      });
    // setMovies(moviesData)
    // movies = moviesData
  }

  const renderMovies = movies.map((movie) => {
    return <MovieCard movie={movie} />;
  });

  return <div id="movies-list">{renderMovies}</div>;
}

export default MovieList;
