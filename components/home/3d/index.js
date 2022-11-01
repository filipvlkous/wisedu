import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Obraze from "../../../public/Group 3.svg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function ThreeD() {
  const { scrollYProgress } = useScroll();
  //const y2 = useTransform(scrollYProgress, [0, 1], [200, -400]);
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 400]);

  return (
    <section className=" w-full overflow-hidden py-10">
      <div className=" max-w-7xl mx-auto font-Bitter px-4 sm:px-6 lg:px-8 pb-5">
        <div className="flex flex-col-reverse lg:flex-row  items-center gap-10 w-full relative ">
          <div className=" h-[550px] w-[500px] cursor-pointer">
            <Spline scene="https://prod.spline.design/h7-8Evtl-BgHKNjH/scene.splinecode" />
          </div>
          <div className="  lg:pl-24">
            <h2 className=" pb-6 font-extrabold text-3xl text-primary">
              Kde bude hodina probíhat?
            </h2>
            <p className=" w-96 text-left text-lg">
              Doučování může probíhat jak prezenčně (třeba u tebe doma, v
              kavárně nebo knihovně) tak on-line přes skype. Vždy je vše na
              vzájemné dohodě.
            </p>
          </div>
          <motion.div
            className=" absolute right-0 top-0 w-52 z-20"
            style={{ x: x1 }}
          >
            <Image src={Obraze} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
