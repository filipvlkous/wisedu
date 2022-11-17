import { useRef } from "react";
import Image from "next/image";
import photo from "../../public/niki.png";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../../public/Ellipse3.svg";
import { useContainerDimensions } from "../dimensions";
export default function Niky() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const componentRef = useRef();
  const width = useContainerDimensions(componentRef);
  return (
    <section
      ref={componentRef}
      className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 font-Bitter"
    >
      <div className=" relative flex w-full flex-col-reverse lg:flex-row  items-center ">
        <Image
          src={photo}
          className=" w-4/5 sm:w-3/5 md:w-[500px] pb-10 md:pb-0"
          alt="Nikol učitelka doučování"
        />
        <div className=" w-full flex flex-col md:px-20 items-start md:pl-32">
          <h2 className="niki inline text-4xl font-extrabold pb-4">Nikol</h2>
          <p className=" w-5/5 md:w-4/5">
            Ahoj, jmenuji se Nikola a jsem studentka Vysoké školy ekonomické v
            Praze. Studuji fakultu financí a účetnictví. Z účetnictví a
            ekonomiky jsem na střední škole odmaturovala na jedničky. Stále se
            ve svém oboru vzdělávám. Jsem empatická, trpělivá a ráda ti pomohu s
            účetnictvím. Věř mi, není to žádná věda. :) Doučuji studenty, kteří
            studují především střední školu.
          </p>
          <div>
            <p className=" text-xl pt-5 font-extrabold">Dovednosti</p>
            <p>&#x2022; Účetnictví</p>
            <p>&#x2022; Money S3</p>
            <p>&#x2022; Ekonomie</p>
          </div>
        </div>
        {width.width > 768 ? (
          <motion.div
            style={{ y: y1 }}
            className="  md:visible absolute right-0 bottom-0 w-36 h-auto"
          >
            <Image src={img1} alt="" />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
