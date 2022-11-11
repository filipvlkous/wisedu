import React, { useEffect, useRef } from "react";
import Card from "./card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

export default function PayProgram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation({});

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);

  return (
    <section className="relative bg-neutral-800 py-40 pb-64">
      <div className="custom-shape-divider-bottom-1668078671">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          className=" fill-white"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-Bitter ">
        <motion.ul
          ref={ref}
          variants={container}
          initial="hidden"
          animate="visible"
          //whileInView="visible"
          // className=" flex flex-col justify-center lg:flex-row gap-10"
          className=" flex flex-col lg:flex-row gap-10 [&>*]:flex-1"
        >
          <motion.li variants={item}>
            <Card
              item={navigation.Kratky}
              title={values.a.title}
              txt={values.a.txt}
              price={values.a.price}
            />
          </motion.li>
          <motion.li variants={item}>
            <Card
              item={navigation.Stred}
              title={values.b.title}
              txt={values.b.txt}
              price={values.b.price}
            />
          </motion.li>
          <motion.li variants={item}>
            <Card
              item={navigation.Dlouhy}
              title={values.c.title}
              txt={values.c.txt}
              price={values.c.price}
            />
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

const values = {
  a: {
    title: "Jednorázová lekce",
    txt: [
      "1 - 2 lekce doučování",
      "Tento balíček je vhodný pokud si potřebuješ ujasnit pouze určitou látku.",
    ],
    price: "380 Kc/h",
  },
  b: {
    title: "Střednědobá lekce",
    txt: [
      "3-15 lekcí doučování",
      "Nejsi si jistý v účetnictví? Můžeme spolu probrat témata který ti dělají problém.",
    ],
    price: "350 Kc/h",
  },
  c: {
    title: "Dlouhodobá lekce",
    txt: [
      "16 a více lekcí",
      "Pokud chceš soustavnou přípravu na maturitu nebo jen v účetnictví vyniknout.",
    ],
    price: "300 Kc/h",
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const navigation = {
  Kratky: { name: "Kátký", price: "380 Kč/h" },
  Stred: { name: "Stření", price: "350 Kč/h" },
  Dlouhy: { name: "Dlouhý", price: "330 Kč/h" },
};
