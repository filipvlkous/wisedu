import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const PageTransition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.4,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};
