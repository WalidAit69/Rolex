"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function BurgerMenu() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const controls = useAnimation();
  const rotatecontrols = useAnimation();
  const rotateminuscontrols = useAnimation();

  useEffect(() => {
    if (IsMenuOpen) {
      controls.start({ gap: 0 });

      rotatecontrols.start({ rotate: "45deg" });
      rotateminuscontrols.start({ rotate: "-45deg", y: -1.5 });
    } else {
      controls.start({ gap: "6px" });

      rotatecontrols.start({ rotate: "0deg" });
      rotateminuscontrols.start({ rotate: "0", x: 0 });
    }
  }, [IsMenuOpen]);

  return (
    <motion.div
      initial={{ gap: "6px" }}
      animate={controls}
      className="flex flex-col relative gap-[6px] w-[15px]"
      onClick={() => setIsMenuOpen(!IsMenuOpen)}
    >
      <motion.div
        animate={rotatecontrols}
        transition={{ delay: 0.3 }}
        className=" w-full h-[1.5px] bg-white "
      ></motion.div>
      <motion.div
        animate={rotateminuscontrols}
        transition={{ delay: 0.3 }}
        className=" w-full h-[1.5px] bg-white "
      ></motion.div>
    </motion.div>
  );
}

export default BurgerMenu;
