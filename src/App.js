import { useEffect, useState } from 'react'
import SearchIcon from './assets/search.svg'
import MovieCard from './components/MovieCard';
import './App.css';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=94e26dc1";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>
        <div className="search">
          <input
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="Search Icon"
            onClick={() => searchMovies(searchTerm)}
          ></img>
        </div>

        {
          movies.length > 0 ? 
          (<div className='container'>
            {movies.map((movie) => (
            <MovieCard movie={movie} />
            ))}
          </div>) 
          :
          (<div className='empty'>
            <h2>No Movies Found</h2>
          </div>)
        }

        
    </div>
  );
}

export default App;
