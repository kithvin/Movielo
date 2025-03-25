import axios from "axios";

// Base URL for The Movie Database (TMDB) API for fetching movie data
const movieBaseURL = "https://api.themoviedb.org/3/movie";

// Base URL for discovering movies by genre
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=f31355e0484b41ee3bd30fdeec0f87cd";

// API key for authenticating requests to TMDB
const api_key = "f31355e0484b41ee3bd30fdeec0f87cd";

// Fetch popular movies from TMDB API
const getPopularMovies = axios.get(
  movieBaseURL + "/popular?api_key=" + api_key
);

// Fetch movies by genre ID
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getPopularMovies, // Exporting the function to be used in other parts of the application
  getMovieByGenreId, // Exporting function to fetch movies by genre
};
