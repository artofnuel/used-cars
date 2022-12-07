import React from "react";
import { useState } from "react";
import { data } from "./Cardata";

const Carousel = () => {
  const imgs = data[0].img;

  const [active, setActive] = useState(imgs[0]);

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
    </>
  );
};

export default Carousel;
