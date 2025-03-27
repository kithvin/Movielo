import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import GenresList from "../Constant/GenresList"; // Import genre list
import MovieList from "./MovieList"; // Import MovieList component

/* GenereMovieList */

function GenereMovieList() {
  return (
    <div className="mt-27 p-5 px-10 md:px-20">
      
      {/* Genre Title */}
      {/* Loop through the first 5 genres */}

      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div key={item.id} className="mb-8">
              <h2 className="text-yellow-300 text-[25px] font-bold ml-15 mb-4 text-center sm:text-left">
                {item.name} {/* Displaying the genre name */}
                <span
                  className="font-normal text-[16px] cursor-pointer text-yellow-300
                    float-right flex justify-end sm:justify-start mt-2 sm:mt-0"
                >
                  VIEW ALL <IoChevronForwardSharp className="text-white ml-1" />
                </span>
              </h2>

              {/* Display the list of movies for this genre */}
              
              <MovieList genereId={item.id} />
            </div>
          )
      )}
    </div>
  );
}

export default GenereMovieList;
