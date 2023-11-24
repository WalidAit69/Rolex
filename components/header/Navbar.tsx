"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { Search, MapPin, Heart } from "lucide-react";
import BurgerMenu from "./BurgerMenu";
import { useScrollDirection } from "@/hooks/UseScroll";
import { motion, useAnimation, useInView } from "framer-motion";

function Navbar() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const scrolldirection = useScrollDirection();
  const controls = useAnimation();
  const navcontrols = useAnimation();
  const navlicontrols = useAnimation();

  useEffect(() => {
    controls.start({ top: 0 });

    if (scrolldirection === "down") {
      controls.start({ top: -80 });
    } else {
      controls.start({ top: 0 });
    }

    if (IsMenuOpen) {
      navcontrols.start({ height: "91vh", display: "block" });
      navlicontrols.start({ x: 0, opacity: 1 });
    } else {
      navcontrols.start({
        height: 0,
        transition: { delay: 1.4 },
      });
      navcontrols.start({
        transition: { delay: 2 },
        display: "none",
      });
      navlicontrols.start({ x: -200, opacity: 0 });
    }
  }, [scrolldirection, IsMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ top: -80 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
        className="z-50 fixed w-full bg-gradient-to-r from-[var(--dark-green)] to-[var(--green)] h-20"
      >
        <nav className="relative flex h-full items-center justify-between text-white mx-5">
          <div>
            <BurgerMenu IsMenuOpen={IsMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>
          <div className="flex gap-3">
            <Search size={17} />
            <MapPin size={17} />
            <Heart size={17} />
          </div>
        </nav>
      </motion.header>

      <motion.nav
        initial={{ height: 0 }}
        animate={navcontrols}
        transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
        className="z-50 fixed w-full top-20 bg-gradient-to-r from-[var(--dark-green)] to-[var(--green)]"
      >
        <div className="flex flex-col gap-10 ml-10 mt-10">
          <ul className="text-[23px] font-bold flex flex-col w-full h-full gap-4 text-white">
            <motion.li
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.8, 0, 0, 0.8] }}
              animate={navlicontrols}
            >
              Rolex watches
            </motion.li>
            <motion.li
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.8, 0, 0, 0.8] }}
              animate={navlicontrols}
            >
              Watchmaking
            </motion.li>
            <motion.li
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              animate={navlicontrols}
              className="my-5"
            >
              About Rolex
            </motion.li>
            <motion.li
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.8, 0, 0, 0.8] }}
              animate={navlicontrols}
            >
              Rolex and Sports
            </motion.li>
            <motion.li
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.8, 0, 0, 0.8] }}
              animate={navlicontrols}
              className="mb-5"
            >
              Perpetual Initiatives
            </motion.li>
            <motion.li
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
              animate={navlicontrols}
            >
              Buying a Rolex
            </motion.li>
            <motion.li
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
              animate={navlicontrols}
            >
              Care and servicing
            </motion.li>
          </ul>
          <motion.ul
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: [0.8, 0, 0, 0.8] }}
            animate={navlicontrols}
            className="flex flex-col w-full h-full gap-3 text-white"
          >
            <li>Find your Rolex</li>
            <li>Configure your watch</li>
            <li>Store locator</li>
          </motion.ul>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
