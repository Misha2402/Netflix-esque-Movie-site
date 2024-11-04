import React from 'react';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '16px', margin: '8px', backgroundColor: '#222', color: '#fff' }}>
      <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{movie.title}</h3>
      <p>{movie.genre} | {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;
