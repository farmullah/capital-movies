import React from "react";
import { TMDB_IMAGE_PATH } from "../../utils/constants";
import "./styles.css";

const MovieCard = ({ movie = {} }) => {
  const { title, poster_path, release_date, vote_average } = movie;

  return (
    <div className="moviecard">
      <img src={TMDB_IMAGE_PATH + poster_path} alt="movie img" />
      <div className="moviecard__details">
        <h4 className="moviecard__title" title={title}>{title}</h4>
        <div className="moviecard__otherdetails">
          <p>
            <b>Release Date: </b>
            {release_date}
          </p>
          <p>
            <b>rating:</b> {vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
