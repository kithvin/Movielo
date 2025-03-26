import React from "react";

function MovieCard(movie) {
  // Base URL for fetching images from TMDB
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="inline-block m-2 md:m-3 cursor-pointer group">
      {/* Movie poster image */}
      <img
        src={IMAGE_BASE_URL + movie.movie.backdrop_path} // Image URL concatenated with backdrop_path from the movie object
        className="w-[230px] md:w-[330px] h-[130px] md:h-[200px] object-cover rounded-2xl group-hover:border-[5px] border-gray-400 p-2 transition-all duration-300 ease-in-out"
      />

      {/* Conditional label for movie */}
      <h2 className="text-gray-400 mt-2 text-[12px] md:text-[17px] font-bold">
        {movie.movie.id % 2 == 0 ? "WATCH MOVIE" : "START WATCHING"}
      </h2>

      {/* Movie title */}
      <h2 className="text-white mt-3 md:text-[20px] group-hover:font-bold">
        {movie.movie.original_title}
      </h2>
    </div>
  );
}

export default MovieCard;
