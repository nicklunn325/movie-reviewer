import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import MovieDisplay from "./MovieDisplay";
import { useState, useEffect } from "react";

function App() {
  const [displayMovieList, setDisplayMovieList] = useState(true);
  const [displayMovie, setDisplayMovie] = useState(null);
  // useState is used to store a variable or data that changes throughout the lifecycle of our program/component
  const [movies, setMovies] = useState([]);

  // useEffect executes callback function as soon as component mounts
  useEffect(getMovies, []);

  function handleDisplayMovie(movie) {
    setDisplayMovie(movie);
    setDisplayMovieList(false);
  }

  function getMovies() {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((moviesData) => {
        setMovies(moviesData);
        // movies = moviesData;
      });
  }

  return (
    <div className="App">
      {displayMovieList ? (
        <MovieList movies={movies} handleDisplayMovie={handleDisplayMovie} />
      ) : (
        <MovieDisplay
          setDisplayMovieList={setDisplayMovieList}
          movie={displayMovie}
        />
      )}
    </div>
  );
}

export default App;

// A user can click on the title/image to display more information about the movie
// add click event to movie cards
