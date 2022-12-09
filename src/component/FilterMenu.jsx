import React from "react";

const FilterMenu = () => {
  return (
    <div>
      {/* Containter */}
      <div className="w-11/12 md:w-full max-w-6xl mx-auto sm:px-4">
        {/* Inputs */}
        <div className="w-full my-3 p-2 border-4 border-green-900 rounded">
          <form
            action=""
            className="flex flex-wrap justify-between items-center"
          >
            <select
              className="w-[150px] md:w-[250px] p-2 px-2 m-1 rounded"
              name="Games"
              placeholder="Games"
            >
              <option value="PS5">Card Model</option>
            </select>
            <select
              className="w-[150px] md:w-[250px] p-2 px-2 m-1 rounded"
              name="Games"
              placeholder="Games"
            >
              <option value="PS5">Car Year</option>
            </select>
            <select
              className="w-[150px] md:w-[250px] p-2 px-2 m-1 rounded"
              name="Games"
              placeholder="Games"
            >
              <option value="PS5">Price</option>
            </select>
            <select
              className="w-[150px] md:w-[250px] p-2 px-2 m-1 rounded"
              name="Games"
              placeholder="Games"
            >
              <option value="PS5">Condition</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
