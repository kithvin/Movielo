import React, { useEffect, useState } from "react"; // Importing React hooks
import GlobalApi from "../Services/GlobalApi"; // Importing the API service

function Hero() {
  const [movieList, setMovieList] = useState([]); // State to store the list of popular movies

  // useEffect runs when the component mounts to fetch popular movies
  useEffect(() => {
    getPopularMovies();
  }, []); // Empty dependency array ensures it runs only once

  // Function to fetch popular movies from the API
  const getPopularMovies = () => {
    GlobalApi.getPopularMovies.then((resp) => {
      const result = resp.data.results; // Extract movie results from API response
      setMovieList(result[0]); // Set only the first movie in the state
    });
  };
  return <div>Hero</div>;
}

export default Hero;
