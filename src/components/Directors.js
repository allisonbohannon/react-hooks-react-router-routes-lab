import React from "react";
import { directors } from "../data";

function Directors() {

  const displayDirectors = directors.map(director => {
    return (
      <div key={director.name}>
        {director.name}
        <ul>
        {director.movies.map(movie => {return <li key={movie}>{movie}</li>})}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  );
}

export default Directors;
