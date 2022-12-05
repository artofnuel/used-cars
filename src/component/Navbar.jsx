import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/pdp">
          <h2 className="text-lg font-bold cursor-pointe">Product Display</h2>
        </Link>
        <h2 className="text-lg font-bold cursor-pointer">Dashboard</h2>
      </div>
    </div>
  );
};

export default Navbar;
