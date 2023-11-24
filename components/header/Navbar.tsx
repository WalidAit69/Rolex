import React from "react";
import Logo from "../Logo";
import { Search, MapPin, Heart } from "lucide-react";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  return (
    <header className="z-50 fixed w-full bg-gradient-to-r from-[var(--dark-green)] to-[var(--green)] h-20">
      <nav className="relative flex h-full items-center justify-between text-white mx-5">
        <div>
          <BurgerMenu />
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
    </header>
  );
}

export default Navbar;
