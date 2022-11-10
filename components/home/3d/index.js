import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Obraze from "../../../public/Group 3.svg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function ThreeD() {
  const { scrollYProgress } = useScroll();
  //const y2 = useTransform(scrollYProgress, [0, 1], [200, -400]);
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 400]);

  return (
    <section className="relative w-full overflow-hidden py-10">
      <div class="custom-shape-divider-bottom-1668078783">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" fill-neutral-800"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className=" max-w-7xl mx-auto font-Bitter px-4 sm:px-6 lg:px-8 pb-5">
        <div className="flex flex-col-reverse lg:flex-row  items-center gap-10 w-full relative ">
          <div className=" h-[550px] w-[500px] cursor-pointer">
            <Spline scene="https://prod.spline.design/h7-8Evtl-BgHKNjH/scene.splinecode" />
          </div>
          <div className=" z-10 lg:pl-24">
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
            className=" absolute z-0 right-0 top-[-65px] lg:top-0  w-52 "
            style={{ x: x1 }}
          >
            <Image src={Obraze} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
