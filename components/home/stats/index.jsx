import Count from "./countUp";
import Image from "next/image";
import Image1 from "../../../public/Ellipse 4.svg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Example() {
  const { scrollYProgress } = useScroll();
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-white pt-12 sm:pt-16 font-Bitter">
      <div className="mt-10 pb-8 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-white" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl  mx-auto">
              <motion.dl
                style={{ y: y2 }}
                className="rounded-lg bg-white shadow-xl sm:grid sm:grid-cols-3"
              >
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Studentů
                  </dt>
                  <Count prefix={"+"} numb={50} duration={2} suffix={""} />
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Spokojenost
                  </dt>
                  <Count prefix={""} numb={100} duration={2.3} suffix={" %"} />
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Odučených hodin
                  </dt>
                  <Count prefix={"+"} numb={200} duration={2.9} suffix={""} />
                </div>
              </motion.dl>
            </div>
            <motion.div style={{ y: y1 }}>
              <Image src={Image1} alt="kolo" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
