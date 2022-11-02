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
    <section className="bg-neutral-800 py-40">
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
          <motion.div variants={item}>
            <Card
              item={navigation.Kratky}
              title={values.a.title}
              txt={values.a.txt}
              price={values.a.price}
            />
          </motion.div>
          <motion.div variants={item}>
            <Card
              item={navigation.Stred}
              title={values.b.title}
              txt={values.b.txt}
              price={values.b.price}
            />
          </motion.div>
          <motion.div variants={item}>
            <Card
              item={navigation.Dlouhy}
              title={values.c.title}
              txt={values.c.txt}
              price={values.c.price}
            />
          </motion.div>
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
