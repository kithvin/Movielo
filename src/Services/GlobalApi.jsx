import axios from "axios";

// Base URL for The Movie Database (TMDB) API for fetching movie data
const movieBaseURL = "https://api.themoviedb.org/3/movie";

// API key for authenticating requests to TMDB
const api_key = "f31355e0484b41ee3bd30fdeec0f87cd";

// Fetch popular movies from TMDB API
const getPopularMovies = axios.get(
  movieBaseURL + "/popular?api_key=" + api_key
);

export default {
  getPopularMovies, // Exporting the function to be used in other parts of the application
};
