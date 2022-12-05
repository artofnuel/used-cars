import React from "react";
import { data } from "./Cardata";

const CarCards = () => {
  return (
    <div>
      {/* Container */}
      <div className="w-11/12 md:w-full max-w-6xl my-4 mx-auto">
        {/* grid */}
        <div className="masonry md:masonry-sm w-full justify-center items-center">
          {data.map((item) => (
            <div className="rounded border-2 border-green-900 mb-5 hover:scale-105 duration-500">
              <img
                className="w-full object-cover object-center"
                src={item.img[0]}
                alt={item.title}
              />
              <div className="flex flex-col gap-2 p-2">
                <p className="font-bold text-md md:text-xl">{item.title}</p>
                <p className="text-md md:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCards;
