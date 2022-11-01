import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function _error() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-Bitter pt-10">
      <div className="flex flex-col items-center w-full justify-center gap-10">
        <h2 className=" text-4xl font-extrabold">Chyba </h2>
        <p style={{ margin: 0 }}> Něco tady nefunguje...</p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className=" cursor-pointer text-xl sm:text-3xl md:text-4xl lg:text-2xl font-bold px-5 py-1 rounded-3xl border-2 text-white border-primary bg-primary"
          >
            Zpatky
          </Link>
        </motion.div>{" "}
        <img
          width={300}
          height={300}
          src="https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"
        />
      </div>
    </section>
  );
}
