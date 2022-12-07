import React from "react";
import { data } from "./Cardata";
import { BsWhatsapp } from "react-icons/bs";

const CarCards = () => {
  return (
    <div>
      {/* Container */}
      <div className="w-11/12 md:w-full max-w-6xl my-4 mx-auto">
        {/* grid */}
        <div className="grid w-full gap-5 justify-center items-center">
          {data.map((item) => (
            <div className="w-full flex gap-3 rounded-xl border-4 border-green-900">
              {/* imgs */}
              <div className="flex gap-2 w-2/4">
                <img
                  className="w-full aspect-square object-cover rounded-l-md"
                  src={item.img[0]}
                  alt={item.title}
                />
                <img
                  className="hidden lg:block w-full aspect-square object-cover"
                  src={item.img[1]}
                  alt={item.title}
                />
              </div>
              {/* texts */}
              <div className="w-2/4 flex flex-col justify-between gap-2 p-2">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between gap-2">
                    <p className="font-bold text-md md:text-lg">{item.title}</p>
                    <p className="font-bold text-md md:text-lg">{item.price}</p>
                  </div>
                  <p className="text-md md:text-lg line-clamp-1 md:line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <a
                  className="flex justify-center items-center gap-2 p-2 my-4 bg-green-900 rounded-md text-center text-white font-bold"
                  href="tel:+2348022352095"
                >
                  <BsWhatsapp size={20} />
                  Contact me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCards;
