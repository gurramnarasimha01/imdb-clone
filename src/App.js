import MovieCard from './MovieCard';

function App() {
  return (
    <div>
      <h1 style={{ margin: "20px" }}>Movies</h1>
      <MovieCard 
        poster="https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
        title="Dune: Part Two"
        year="2024"
        rating="8.6"
      />
    </div>
  );
}
export default App;