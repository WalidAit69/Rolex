"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function BurgerMenu({
  IsMenuOpen,
  setIsMenuOpen,
  IsSearchMenuOpen,
  setIsSearchMenuOpen,
}: {
  IsMenuOpen: boolean;
  IsSearchMenuOpen: boolean;
  setIsMenuOpen: any;
  setIsSearchMenuOpen: any;
}) {
  const controls = useAnimation();
  const rotatecontrols = useAnimation();
  const rotateminuscontrols = useAnimation();

  useEffect(() => {
    if (IsMenuOpen || IsSearchMenuOpen) {
      controls.start({ gap: 0 });

      rotatecontrols.start({ rotate: "45deg" });
      rotateminuscontrols.start({ rotate: "-45deg", y: -1.5 });
    } else {
      controls.start({ gap: "6px" });

      rotatecontrols.start({ rotate: "0deg" });
      rotateminuscontrols.start({ rotate: "0", x: 0 });
    }
  }, [IsMenuOpen , IsSearchMenuOpen]);

  function HandleMenu() {
    if (IsMenuOpen) {
      setIsMenuOpen(!IsMenuOpen);
    } else if (IsSearchMenuOpen) {
      setIsSearchMenuOpen(!IsSearchMenuOpen);
    } else {
      setIsMenuOpen(!IsMenuOpen);
    }
  }

  return (
    <div
      onClick={HandleMenu}
      className="flex items-center gap-2 cursor-pointer hover:text-green-300 transition-colors burgerMenu"
    >
      <motion.div
        initial={{ gap: "6px" }}
        animate={controls}
        className="flex flex-col relative gap-[6px] w-[15px]"
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
      <h1 className="max-md:hidden mb-[1px]">
        {!IsMenuOpen && !IsSearchMenuOpen ? "Menu" : "Close"}
      </h1>
    </div>
  );
}

export default BurgerMenu;
