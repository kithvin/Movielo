import React, { useState } from "react";

import logo from "./../assets/IMG/logo.png";

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

function Header() {
  return (
    <div className="flex">
      <img src={logo} className="w-[120px]" />
      <ul className="flex gap-8">
        {menu.map((item)=>(
          <li className="text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 pb-5 py-1 rounded-md transition-all duration-500">{item.name}</li>
        ))}
      </ul>
      <div>
        
      </div>
    </div>
  );
}

export default Header;
