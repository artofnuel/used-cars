import React from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      {/* container */}
      <div className="w-full bg-green-900 flex justify-between items-center text-white p-4">
        <Link to="/">
          <h1 className="text-2xl font-bold cursor-pointer">
            CarSite<span className="text-red-400 text-2xl font-bold">.</span>
          </h1>
        </Link>
        <span className="relative flex gap-3 items-center">
          <HiSearch
            className="text-white md:absolute md:text-black md:left-2"
            size={20}
          />
          <input
            className="hidden md:block p-2 rounded px-8 text-black outline-none"
            type="text"
          />
        </span>
        <div className="invisible hidden md:block flex flex-col md:flex-row md:gap-5">
          <Link to="/pdp">
            <h2 className="text-lg font-bold cursor-pointe">Product Display</h2>
          </Link>
          <h2 className="text-lg font-bold cursor-pointer">Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
