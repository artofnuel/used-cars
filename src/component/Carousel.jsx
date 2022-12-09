import React from "react";
import { useState } from "react";
import { data } from "./Cardata";
import { useParams } from "react-router-dom";

const Carousel = () => {
  const imgs = data[0].img;

  const [active, setActive] = useState(imgs[0]);

  const { carId } = useParams();
  const carInfo = data.find((car) => car.id == carId);

  const { title, price, description } = carInfo;

  const handleActive = (index) => {
    console.log(index);
    const slider = imgs[index];
    setActive(slider);
  };

  return (
    <>
      {/* main img */}
      <div>
        <img
          className="w-full h-[500px] object-cover object-center rounded-md"
          src={active}
          alt=""
        />
      </div>
      {/* carousel */}
      <div className="w-full relative flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {imgs.map((item, index) => (
          <img
            key={index}
            onClick={() => handleActive(index)}
            className="w-[220px] inline-block p-1 cursor-pointer"
            src={item}
            alt="/"
          />
        ))}
      </div>
      {/* The Information */}
      <div className="flex flex-col gap-5 p-4 border-2 border-green-900 rounded ">
        <div className="flex justify-between">
          <p className="font-bold text-xl">{title}</p>
          <p className="font-bold text-xl text-left md:text-center">
            Price: N{price}
          </p>
        </div>
        <p className="pr-20">{description}</p>
        <a
          className="text-lg font-semibold p-3 bg-green-900 text-white text-center rounded-lg hover:bg-white hover:text-green-900 border-2 border-green-900"
          href="tel:+23422352095"
        >
          Call Me
        </a>
      </div>
    </>
  );
};

export default Carousel;
