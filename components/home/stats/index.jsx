import Count from "./countUp";
import Image from "next/image";
import Image1 from "../../../public/Ellipse4.svg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Example() {
  const { scrollYProgress } = useScroll();
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="relative bg-white py-12 mb-10 sm:py-16 font-Bitter">
      <div className="absolute inset-0 h-1/2 bg-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl  mx-auto">
          <motion.div
            style={{ y: y2 }}
            className="rounded-lg bg-white shadow-xl sm:grid sm:grid-cols-3"
          >
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <h4 className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Studentů
              </h4>
              <Count prefix={"+"} numb={50} duration={2} suffix={""} />
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <h4 className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Spokojenost
              </h4>
              <Count prefix={""} numb={100} duration={2.3} suffix={" %"} />
            </div>
            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <h4 className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Odučených hodin
              </h4>
              <Count prefix={"+"} numb={200} duration={2.9} suffix={""} />
            </div>
          </motion.div>
        </div>
        <motion.div style={{ y: y1 }}>
          <Image src={Image1} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
