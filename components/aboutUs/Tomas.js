import React from "react";
import Image from "next/image";
import photo from "../../public/Group 21.png";
export default function Tomas() {
  return (
    <section className=" overflow-hidden md:overflow-visible mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:px-8 font-Bitter">
      <div className=" flex flex-row-reverse w-full justify-center align-middle items-center ">
        <Image
          src={photo}
          className=" w-3/5"
          alt="Tomas teacher of acounting"
        />
        <div className=" w-full pl-32">
          <h2 className=" text-4xl font-extrabold pb-4">Tomas</h2>
          <p className=" w-4/5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
            pellentesque quam vel velit. Praesent dapibus. Nunc tincidunt ante
            vitae massa. Integer in sapien. Fusce nibh.
          </p>
          <p className=" text-2xl pt-5 font-extrabold">Dovednosti</p>
          <p>Ucetnictvi</p>
          <p>Program</p>
        </div>
      </div>
    </section>
  );
}
