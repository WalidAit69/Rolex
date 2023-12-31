"use client";

import { ChevronRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function PlanetInitiative() {
  const ycontrols = useAnimation();
  const ycontrols2 = useAnimation();
  const opacitycontrols = useAnimation();
  const layercontrols = useAnimation();
  const indexcontrols = useAnimation();

  const ref = useRef(null);
  const Isinview = useInView(ref);

  useEffect(() => {
    if (Isinview) {
      ycontrols.start({ y: 0, opacity: 1 });
      ycontrols2.start({ y: 0, opacity: 1 });
      opacitycontrols.start({ opacity: 1 });
      layercontrols.start({ opacity: 0 });
    } else {
      ycontrols.start({ y: -20, opacity: 0 });
      ycontrols2.start({ y: 20, opacity: 0 });
      opacitycontrols.start({ opacity: 0 });
      layercontrols.start({ opacity: 0.5 });
    }
  }, [Isinview]);

  return (
    <motion.main className="fixed top-0 -z-[10]">
      <section className="relative h-[100vh] bg-[var(--green)]">
        <motion.div
          animate={layercontrols}
          className="z-20 absolute top-0 left-0 w-full h-full bg-black opacity-50"
        ></motion.div>
        <video
          className="h-full w-full object-cover"
          src="/homepage4.webm"
          autoPlay
          loop
          muted
        ></video>

        <div
          ref={ref}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[25]
      text-white text-center flex flex-col items-center gap-3"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ycontrols2}
            transition={{ duration: 0.5, delay: 1 }}
            className="max-lg:text-lg text-3xl uppercase"
          >
            perpetual planet initiative
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={ycontrols}
            transition={{ duration: 0.5, delay: 1 }}
            className="max-lg:text-4xl text-8xl font-bold max-lg:w-[250px] w-[600px]"
          >
            Nnaemeka Ikegwuonu
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={opacitycontrols}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-[200px] text-xl max-lg:text-base items-center bg-gray-500/10 flex gap-1 justify-center mt-8 font-bold bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 py-2 rounded-full"
          >
            Learn more <ChevronRight />
          </motion.button>
        </div>
      </section>
    </motion.main>
  );
}

export default PlanetInitiative;
