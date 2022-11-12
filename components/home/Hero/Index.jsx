import React from "react";
import MainImg from "../../../public/Group21.png";
import Circle1 from "../../../public/Group1.svg";
import Circle2 from "../../../public/Group2.svg";
import Circle3 from "../../../public/Ellipse6.svg";
import Circle4 from "../../../public/Ellipse3.svg";
import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line react-hooks/exhaustive-deps
import { useAnimation, motion } from "framer-motion";

export default function index() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const imgAnimation = useAnimation({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const neagativeImgAnimation = useAnimation({});

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 50;
    neagativeImgAnimation.start({
      x: moveX / -offsetFactor,
      y: moveY / -offsetFactor,
    });

    imgAnimation.start({
      x: moveX / getRandomArbitrary(50, 100),
      y: moveY / getRandomArbitrary(50, 100),
    });
  };

  return (
    <motion.div onMouseMove={(e) => handleMouseMove(e)}>
      <section className=" overflow-hidden xl:overflow-visible mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 font-Bitter">
        <div className=" flex relative w-full py-20 sm:py-32 lg:pb-32 xl:pb-36 lg:flex-row flex-col ">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 text-center lg:text-start ">
            <h1 className="text-5xl  md:text-5xl lg:text-6xl font-bold text-black ">
              Účetnictví,
              <br /> že ho každý
              <br />{" "}
              <span className="here text-6xl  md:text-6xl lg:text-7xl">
                pochopí
              </span>{" "}
            </h1>
            <h2 className=" lg:w-3/5 text-lg py-10">
              Rádi tě naučíme veškeré znalosti účetnictví tak, abys úspěšně
              složil maturitní nebo jinou zkoušku a ještě tě to bavilo.
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-10 justify-center lg:justify-start  ">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/rezervace"
                  className=" cursor-pointer text-xl sm:text-3xl md:text-4xl lg:text-2xl font-bold px-4 py-2 rounded-3xl border-4 text-white border-primary bg-primary"
                >
                  Rezervovat konzultci
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="relative z-9 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 pt-10">
            <div className=" relative">
              <motion.div animate={imgAnimation}>
                <Image
                  alt=""
                  priority={true}
                  quality={30}
                  className="eye absolute top-[-150px] right-[0px] h-52 w-auto "
                  src={Circle2}
                />
              </motion.div>
              <motion.div animate={neagativeImgAnimation}>
                <Image
                  alt=""
                  priority={true}
                  quality={30}
                  src={Circle3}
                  className=" z absolute right-[-40px] overflow-visible top-0"
                />
              </motion.div>
              <Image
                priority={true}
                quality={50}
                className=" z-20"
                alt="Dívka drží počítač a doučuje účetictví"
                src={MainImg}
              />
              <motion.div animate={neagativeImgAnimation}>
                <Image
                  alt=""
                  src={Circle1}
                  className="absolute h-44 w-auto"
                  priority={true}
                  quality={30}
                />
              </motion.div>
              <motion.div animate={imgAnimation}>
                <Image
                  alt=""
                  src={Circle4}
                  className="absolute right-1"
                  priority={true}
                  quality={30}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
