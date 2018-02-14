import React from 'react';

export const Card = ({movie}) => (
  <div className="card">
    <h4 className="card__title">{movie.title}</h4>
    <img className="card__poster"
      src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"
    />
    <div className="card__button-group">
      <button>Favorite</button>
    </div>
  </div>
);


