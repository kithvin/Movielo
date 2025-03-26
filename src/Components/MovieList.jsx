import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

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
    <div className="flex items-center">
      <IoChevronBackOutline className="text-[36px] text-white bg-black p-2 cursor-pointer mb-[120px] rounded-full" />
      <div className="w-full whitespace-nowrap mb-16">
        {/* Loop through the movieList and display the first 5 movies */}
        {movieList.map(
          (item, index) => index < 5 && <MovieCard key={item.id} movie={item} /> // Only display the first 5 movies
        )}
      </div>
      <IoChevronForwardOutline className="text-[36px] text-white bg-black p-2 cursor-pointer mb-[120px] rounded-full" />
    </div>
  );
}

export default MovieList;
