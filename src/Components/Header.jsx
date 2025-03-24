import React, { useState } from "react";
import logo from "../IMG/logo.png";
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoSearch,
} from "react-icons/io5";

function Header() {
  // State to handle the toggle for the mobile menu
  const [toggle, setToggle] = useState(true);

  // Navigation menu items
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Movies",
    },
    {
      id: 3,
      name: "TV",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "News",
    },
    {
      id: 6,
      name: "Hubs",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 px-10">
      {/* Logo */}

      <img src={logo} className="w-[120px]" />

      {/* Desktop Navigation Menu */}

      <ul className="hidden  md:flex gap-8">
        {menu.map((item) => (
          <li
            key={item.id}
            className="text-gray-400 text-[18px] 
                font-medium cursor-pointer mb-3 mt-2 
                 hover:bg-gray-600 hover:text-white
                px-3 pb-2 py-1 rounded-md transition-all duration-500"
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Menu */}

      <div className="md:hidden">
        {/* Menu toggle button */}
        <h2
          className="text-white font-medium flex items-center gap-2 px-3 py-2 pb-2 
            bg-gray-700 rounded-md cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          Home
          {!toggle ? (
            <IoChevronDownOutline className="mt-1" />
          ) : (
            <IoChevronUpOutline className="mt-1" />
          )}
        </h2>

        {/* Mobile dropdown menu */}

        {toggle ? (
          <ul
            className="absolute bg-gray-700
            w-[200px] text-center mt-4 left-0 right-0
            ml-auto mr-auto rounded-md px-3"
          >
            {menu.map((item) => (
              <li
                key={item.id}
                className="text-gray-400 text-[18px] 
                font-medium cursor-pointer mb-3 mt-2 
                 hover:bg-gray-600 hover:text-white
                px-3 pb-2 py-3 rounded-md transition-all duration-500"
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Search and User Profile Section */}

      <div className="flex gap-10">
        {/* Search Icon */}

        <IoSearch
          className="text-[35px] text-gray-300 
            hover:bg-gray-700 px-[4px] pb-[2px] py-[2px] cursor-pointer
            rounded-md hover:text-white transition-all duration-500 ease-in-out"
        />

        {/* user profile */}
        <h2
          className="px-[10px] text-[20px]
            text-gray-300 border-[2px] border-white rounded-full"
        >
          K
        </h2>
      </div>
    </div>
  );
}

export default Header;
