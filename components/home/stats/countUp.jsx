import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function CountUpAnim({ prefix, numb, duration, suffix }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} onChange={() => setSeen(true)}>
      <CountUp
        prefix={prefix}
        start={0}
        end={inView ? numb : 0}
        duration={duration}
        suffix={suffix}
      >
        {({ countUpRef }) => (
          <span
            className="order-1 text-5xl font-bold text-primary"
            ref={countUpRef}
          />
        )}
      </CountUp>
    </div>
  );
}
