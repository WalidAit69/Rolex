"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { Search, MapPin, Heart, ArrowRight } from "lucide-react";
import BurgerMenu from "./BurgerMenu";
import { useScrollDirection } from "@/hooks/UseScroll";
import { motion, useAnimation, useInView } from "framer-motion";

function Navbar() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [IsSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  const scrolldirection = useScrollDirection();
  const controls = useAnimation();
  const navcontrols = useAnimation();
  const navlicontrols = useAnimation();
  const searchcontrols = useAnimation();
  const searchinputcontrols = useAnimation();

  useEffect(() => {
    controls.start({ top: 0 });

    if (scrolldirection === "down" && !IsMenuOpen && !IsSearchMenuOpen) {
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

    if (IsSearchMenuOpen) {
      searchcontrols.start({ height: "20vh", display: "block" });
      searchinputcontrols.start({ opacity: 1, transition: { delay: 0.5 } });
    } else {
      searchinputcontrols.start({ opacity: 0 });
      searchcontrols.start({
        height: 0,
        transition: { delay: 1 },
      });
      searchcontrols.start({
        transition: { delay: 2 },
        display: "none",
      });
    }
  }, [scrolldirection, IsMenuOpen, IsSearchMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ top: -80 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
        className="z-50 fixed w-[100vw] bg-gradient-to-r from-[var(--dark-green)] to-[var(--green)] h-20"
      >
        <nav className="h-full text-white mx-auto max-w-[90rem]">
          <div className="relative flex h-full items-center justify-between mx-10">
            <BurgerMenu
              IsMenuOpen={IsMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              IsSearchMenuOpen={IsSearchMenuOpen}
              setIsSearchMenuOpen={setIsSearchMenuOpen}
            />
            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo />
            </div>
            <div className="flex gap-10 max-lg:gap-3">
              <div
                onClick={() => setIsSearchMenuOpen(true)}
                className="flex items-center gap-2 cursor-pointer hover:text-green-300 transition-colors"
              >
                <Search size={17} />
                <h1 className="max-lg:hidden">Search</h1>
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:text-green-300 transition-colors">
                <MapPin size={17} />
                <h1 className="max-lg:hidden">Store Locator</h1>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-green-300 transition-colors">
                <Heart size={17} />
                <h1 className="max-lg:hidden">Favourites</h1>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      <motion.nav
        initial={{ height: 0 }}
        animate={navcontrols}
        transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
        className="z-50 fixed w-[100vw] top-20 bg-gradient-to-r from-[var(--dark-green)] to-[var(--green)]"
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

      <motion.nav
        initial={{ height: 0 }}
        animate={searchcontrols}
        transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
        className="z-50 fixed w-[100vw] h-[20vh] top-20 bg-gradient-to-r from-[var(--dark-green)] to-[var(--green)]"
      >
        <motion.div className="h-[15vh] flex items-end justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={searchinputcontrols}
            transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
            className="w-[500px] max-md:w-[300px] bg-white/10 text-white rounded-full h-10 flex items-center"
          >
            <input
              type="text"
              placeholder="Search"
              className="border-0 outline-none w-[90%] h-full rounded-full px-5 bg-transparent"
            />
            {IsSearchMenuOpen && (
              <ArrowRight color="white" cursor={"pointer"} />
            )}
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}

export default Navbar;
