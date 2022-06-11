import React, { useContext } from "react";
import MovieCard from "../componets/MovieCard";
import { MoviesContext } from "../context/MoviesContext";

const LastestMovies = () => {
  const { movies = [] } = useContext(MoviesContext);

  return (
    <div className="movies__container">
      <h2 className="title">Latest Movies</h2>
      <div className="movies">
        {movies.map((m, i) => (
          <React.Fragment key={i}>
            <MovieCard movie={m} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LastestMovies;
