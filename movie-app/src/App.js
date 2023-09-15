import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./card";
import "./busca.svg";
import "./App.css";

const API_URL = "https://omdbapi.com?apikey=7b62cb24";
const App = () => {
  /*const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("All");
  }, []);

  return (
    <div className="app">
      <h1>Movie app</h1>

      <div className="busca">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onInput={() => searchMovies(searchTerm)}
        />
        <img
          src="./busca.svg"
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      ) : (
        <div className="vazio">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );*/
  return (
    <div className="App">
      <h1>Movie App</h1>
    </div>
  )
};

export default App;