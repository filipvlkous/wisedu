import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Card({ item, title, txt, price }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className=" relative px-8 py-8 bg-white flex flex-col rounded-3xl shadow-xl items-center "
    >
      <h3 className=" item-center text-center font-extrabold text-3xl text-Black">
        {title}
      </h3>
      <div className=" flex flex-col pt-3 pb-7 gap-3">
        <p>&#x2022; 1 lekce = 60 minut</p>
        {txt.map(function (object, i) {
          return <p key={i}>&#x2022; {object}</p>;
        })}
      </div>
      <p className=" font-extrabold text-2xl">{price}</p>

      <Link
        href={"/rezervace"}
        className=" cursor-pointer text-xl lg:text-base font-bold px-4 py-1 my-2 rounded-3xl border-4 text-white border-primary bg-primary"
      >
        Zdarma rezervovat konzultaci
      </Link>
    </motion.div>
  );
}
