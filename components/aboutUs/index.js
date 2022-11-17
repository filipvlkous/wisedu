import React, { useRef } from "react";
import Image from "next/image";
import vektor from "../../public/Vector1.png";
import img1 from "../../public/Group1.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContainerDimensions } from "../dimensions";

export default function Index() {
  const { scrollYProgress } = useScroll();
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const componentRef = useRef();
  const width = useContainerDimensions(componentRef);

  return (
    <section
      ref={componentRef}
      className=" overflow-hidden md:overflow-visible mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  font-Bitter"
    >
      <div className=" flex relative w-full py-20 sm:py-22  lg:flex-row flex-col ">
        <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 flex flex-col items-center ">
          <h1 className="text-4xl  md:text-4xl lg:text-5xl font-bold text-black  ">
            Něco o nás
          </h1>
          <Image className="pt-3 w-96" src={vektor} alt="" />
        </div>
        {width.width > 768 ? (
          <motion.div
            style={{ y: y2 }}
            className=" absolute left-0 w-36 h-auto"
          >
            <Image src={img1} alt="" />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
