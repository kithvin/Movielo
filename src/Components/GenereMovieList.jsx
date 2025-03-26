import React from "react";
// import { IoChevronForwardSharp } from "react-icons/io5";
import GenresList from "../Constant/GenresList"; // Import genre list
import MovieList from "./MovieList";// Import MovieList component

/* GenereMovieList */
function GenereMovieList() {
  return (
    <div className="mt-25 p-5 px-10 md:px-20">
      {/* Genre Title */}
      {/* Loop through the first 5 genres */}
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div key={item.id} className="">
              <h2 className="text-yellow-300 text-[25px] font-bold ml-5 mb-4">
                {item.name} {/* Displaying the genre name */}
                {/* <span
                  className="font-normal text-[16px] cursor-pointer text-gray-400
            float-right flex"
                >
                  VIEW ALL <IoChevronForwardSharp className="text-white ml-1" />
                </span> */}
              </h2>

              {/* Display the list of movies for this genre */}
              <MovieList genereId={item.id}/>
            </div>
          )
      )}
    </div>
  );
}

export default GenereMovieList;



