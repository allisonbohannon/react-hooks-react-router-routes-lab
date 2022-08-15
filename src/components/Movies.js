import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map(movie => {
    return (
      <div key={movie.title}>
        Title: {movie.title}
        <br></br>
        Runtime: {movie.time}
        <ul>
          {movie.genres.map(genre => {return <li key={genre}>{genre}</li>})}
        </ul>
      </div>
    )
  }
  )

  return ( 
  <div>
    <h1>Movies Page</h1>
    {displayMovies}
  </div>
  );
}

export default Movies;
