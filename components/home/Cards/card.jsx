import React from "react";
import Image from "next/image";

export default function Card({ numb, text, img, title }) {
  return (
    <div className=" relative  px-8 py-8 bg-third flex flex-col rounded-3xl shadow-xl items-center mt-20 lg:mt-0 ">
      <p className=" absolute font-Fred text-7xl top-[-40px] left-2">{numb}</p>

      <Image
        alt="TADY ZMENIT"
        priority={true}
        quality={50}
        loading="eager"
        src={img}
        className=" w-56"
      />
      <h3 className=" item-center font-extrabold text-xl">{title}</h3>
      <p className=" font-medium flex-grow">{text}</p>
    </div>
  );
}
