import React, { useEffect, useState } from "react"; // Importing React hooks
import GlobalApi from "../Services/GlobalApi"; // Importing the API service

function Hero() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const [movieList, setMovieList] = useState([]); // State to store the list of popular movies

  // useEffect runs when the component mounts to fetch popular movies
  useEffect(() => {
    getPopularMovies();
  }, []); // Empty dependency array ensures it runs only once

  // Function to fetch popular movies from the API
  const getPopularMovies = () => {
    GlobalApi.getPopularMovies.then((resp) => {
      const result = resp.data.results; // Extract movie results from API response
      const randomNum=Math.floor(Math.random()*10) // Generate a random number between 0 and 9
      setMovieList(result[randomNum]); // Set only the first movie in the state
    });
  };
  return (
    <div>
      {/* Background overlay */}
      <div
        className="absolute h-[85vh] bg-gradient-to-t 
              from-[#1e2126] via-transparent to-transparent w-full"
      ></div>

      {/* Movie details */}
      <div
        className="absolute mt-[400px] md:mt[350px] 
        px-10 md:px-24"
      >
        <h2
          className="text-white text-[19px]
            lg:text-[27px]"
        >
          Watch Anytime Anywhere Only on MOVIELO! 🎬🔥
        </h2>
        <h2
          className="text-white text-[36px]
            lg:text-[47px] font-bold mt-1"
        >
          {movieList.original_title}
        </h2>

        {/* Buttons */}
        <div className="flex gap-5 mt-7">
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold 
                     hover:bg-red-700 transition duration-300 cursor-pointer"
          >
            PLAY
          </button>
          <button
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg
                     hover:border-gray-500 hover:text-gray-300 transition duration-300 cursor-pointer"
          >
            DETAILS
          </button>
        </div>
      </div>

      {/* Background image */}
      <img
        src={IMAGE_BASE_URL + movieList.backdrop_path}
        width={1920}
        height={1080}
        className="h-[85vh] object-fit"
      />
    </div>
  );
}

export default Hero;

