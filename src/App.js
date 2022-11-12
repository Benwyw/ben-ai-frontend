import { useState, useEffect } from 'react';

import MovieCard from './components/MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDb_API_KEY}`;

// const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Marvel')
    }, [])

    return (
        <div className="app">
            <h1>Ben's MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter"){
                            searchMovies(searchTerm)
                        }
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => 
                            <MovieCard key={movie.imdbID} movie={movie}/>
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
            )}

            
        </div>
    );
}

export default App;