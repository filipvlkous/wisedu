import React from "react";
import Image from "next/image";
import photo from "../../public/Group 21.png";
export default function Tomas() {
  return (
    <section className=" overflow-hidden md:overflow-visible mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:px-8 font-Bitter">
      <div className=" flex flex-col-reverse md:flex-row-reverse w-full items-center ">
        <Image
          src={photo}
          className=" w-4/5 sm:w-3/5 md:w-[500px]"
          alt="Tomas teacher of acounting"
        />
        <div className=" w-full flex flex-col px-20 items-start md:pl-32">
          <h2 className="tomas text-4xl font-extrabold pb-4">Tomáš</h2>
          <p className=" w-5/5 md:w-4/5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
            pellentesque quam vel velit. Praesent dapibus. Nunc tincidunt ante
            vitae massa. Integer in sapien. Fusce nibh.
          </p>
          <div>
            <p className=" text-xl pt-5 font-extrabold">Dovednosti</p>
            <p>&#x2022; Účetnictví</p>
            <p>&#x2022; Money S3</p>
            <p>&#x2022; Ekonomie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
