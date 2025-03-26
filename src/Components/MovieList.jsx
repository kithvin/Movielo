import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

function MovieList(genereId) {
  // State to store the list of movies for the selected genre
  const [movieList, setMovieList] = useState([]);

  // useEffect hook to fetch movie data whenever the component mounts
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  // Function to fetch movies by genre ID from the API
  const getMovieByGenreId = () => {
    // Fetch movies from the API using the genre ID
    GlobalApi.getMovieByGenreId(genereId.genereId).then((resp) => {
      // Set the movie list state with the response data
      setMovieList(resp.data.results);
    });
  };

  return (
    <div>
      <div className="w-full whitespace-nowrap mb-16">
        {/* Loop through the movieList and display the first 5 movies */}
        {movieList.map(
          (item, index) => index < 5 && <MovieCard movie={item} /> // Only display the first 5 movies
        )}
      </div>
    </div>
  );
}

export default MovieList;
