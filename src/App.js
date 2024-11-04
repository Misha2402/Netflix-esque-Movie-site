import React from 'react';
import MovieList from './components/MovieList';

function App() {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', padding: '20px', fontSize: '2em' }}>Movies</h1>
      <MovieList />
    </div>
  );
}

export default App;
