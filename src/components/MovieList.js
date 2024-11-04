import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const dummyMovies = [
    {
      "id": 1,
      "title": "Inception",
      "genre": "Sci-Fi",
      "releaseYear": 2010,
      "rating": 8.8,
      "poster": "https://m.media-amazon.com/images/I/71DwIcSgFcS.jpg",
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
      "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      "director": "Christopher Nolan",
      "runtime": 148,
      "language": "English",
      "boxOffice": "$829.9 million"
    },
    {
      "id": 2,
      "title": "The Dark Knight",
      "genre": "Action",
      "releaseYear": 2008,
      "rating": 9.0,
      "poster": "https://m.media-amazon.com/images/I/81UjSDy8azL._AC_UF1000,1000_QL80_.jpg",
      "description": "When the menace known as the Joker emerges, he causes havoc on the people of Gotham.",
      "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "director": "Christopher Nolan",
      "runtime": 152,
      "language": "English",
      "boxOffice": "$1 billion"
    }
  ]
  
  function MovieList() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        // Replace this if using a backend API 
        setMovies(dummyMovies);
      }, []);
  
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px' }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
  
  export default MovieList;