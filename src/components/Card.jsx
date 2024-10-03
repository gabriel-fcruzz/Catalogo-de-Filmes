// src/MovieCard.js
import React from "react";
import "../styles/Card.css";

const MovieCard = ({ title, image, rating, description, genres }) => {
  return (
    <div className="movie-card">
      <h3 className="movie-title" style={{ color: "black" }}>
        {title}
      </h3>
      <img
        src={image}
        alt={`${title} Poster`}
        className="movie-poster"
        style={{ color: "black" }}
      />
      <p className="movie-rating">Avaliação: {rating} ⭐</p>
      <p className="movie-description">{description}</p>
      {genres && (
        <div className="movie-genres">
          {genres.map((genre, index) => (
            <span key={index} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
