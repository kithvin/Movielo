import React, { useState } from "react";
import logo from "./../assets/IMG/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState(true);
  const menu = [
    { id: 1, name: "Home" },
    { id: 2, name: "Movies" },
    { id: 3, name: "TV" },
    { id: 4, name: "Sports" },
    { id: 5, name: "News" },
    { id: 6, name: "Hubs" },
  ];
  return (
    <div className="flex justify-between items-center p-4 px-10">
      <img src={logo} className="w-[100px]" />
      <ul className="hidden md:flex gap-8">
        {menu.map((item) => (
          <li
            className={`text-gray-400 text-[18px]
            font-medium cursor-pointer hover:bg-gray-700
            hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <h2
          className="text-white font-medium flex items-center gap-2 px-3 py-2 pb-2 
            bg-gray-700 rounded-md cursor-pointer"
        onClick={()=>setToggle(!toggle)}>
          Home
          {!toggle ? (
            <IoChevronDownOutline className="mt-1" />
          ) : (
            <IoChevronUpOutline className="mt-1" />
          )}
        </h2>

        {toggle ? (
          <ul className="absolute bg-gray-700 w-[200px] text-center mt-4 left-0 right-0 ml-auto mr-auto rounded-2xl px-10">
            {menu.map((item) => (
              <li
                className={`text-gray-400 text-[18px]
            font-medium cursor-pointer hover:bg-gray-700
            hover:text-white px-3 pb-4 py-4 rounded-md transition-all duration-500 ease-in-out`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex gap-10">
        <IoSearch
          className="text-[35px] text-gray-300 
            hover:bg-gray-700 px-[3px] pb-[2px] py-[2px] cursor-pointer
            rounded-md hover:text-white transition-all duration-500 ease-in-out"
        />
        <h2 className="px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full">
          R
        </h2>
      </div>
    </div>
  );
}

export default Header;
