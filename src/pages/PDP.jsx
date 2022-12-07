import React from "react";
import { useState } from "react";
import car from "../asset/car.jpg";
import { data } from "../component/Cardata";
import Carousel from "../component/Carousel";

const PDP = () => {
  return (
    <div className="w-full my-10">
      {/* container */}
      <div className="max-w-6xl w-11/12 mx-auto gap-5 flex flex-col lg:flex-row justify-center items-center md:items-start">
        {/* left side */}
        <div className="flex flex-col gap-5 w-full">
          {/* For the Images */}
          <div className="flex flex-col gap-5 p-4 border-2 border-green-900 rounded">
            <Carousel />
          </div>
          {/* descriptions */}
          <div className="flex flex-col gap-5 p-4 border-2 border-green-900 rounded ">
            <div className="flex justify-between">
              <p className="font-bold text-xl">{data[0].title}</p>
              <p className="font-bold text-xl text-left md:text-center">
                Price: N{data[0].price}
              </p>
            </div>
            <p className="pr-20">{data[0].description}</p>
            <a
              className="text-lg font-semibold p-3 bg-green-900 text-white text-center rounded-lg hover:bg-white hover:text-green-900 border-2 border-green-900"
              href="tel:+23422352095"
            >
              Call Me
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col gap-5 sm:w-full w-4/5 lg:w-2/5">
          <div className="w-full p-4 flex flex-col border-2 border-green-900 rounded-md">
            <p className="font-semibold text-lg text-center">Safety tips</p>
            <ul className="list-disc p-4 flex flex-col gap-2">
              <li>Meet the seller at a safe public place.</li>
              <li>
                Properly inspect the vehicle you are interested in purchasing.
              </li>
              <li>Check all documentation. Pay only when satisfied.</li>
            </ul>
          </div>
          <div className="w-full p-4 flex flex-col border-2 border-green-900 rounded-md">
            <p className="font-semibold text-lg text-center">Safety tips</p>
            <ul className="list-disc p-4 flex flex-col gap-2">
              <li>Meet the seller at a safe public place.</li>
              <li>
                Properly inspect the vehicle you are interested in purchasing.
              </li>
              <li>Check all documentation. Pay only when satisfied.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDP;
