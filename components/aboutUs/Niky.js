import React from "react";
import Image from "next/image";
import photo from "../../public/Group 21.png";
export default function Niky() {
  return (
    <section className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 font-Bitter">
      <div className=" flex w-full md:flex-row  items-center ">
        <Image
          src={photo}
          className=" w-4/5 md:w-3/5 pb-10 md:pb-0"
          alt="Niki teacher of acounting"
        />
        <div className=" w-full md:pl-32">
          <h2 className=" text-4xl font-extrabold pb-4">Niky</h2>
          <p className=" md:w-4/5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
            pellentesque quam vel velit. Praesent dapibus. Nunc tincidunt ante
            vitae massa. Integer in sapien. Fusce nibh.
          </p>
          <p className=" text-2xl pt-5 font-extrabold">Dovednosti</p>
          <p>Ucetnictvi</p>
          <p>Program</p>
          <p>Ekonomie</p>
          <p>Matika</p>
        </div>
      </div>
    </section>
  );
}
