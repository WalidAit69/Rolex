import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("");
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < prevScrollY) {
      setScrollDirection("up");
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return scrollDirection;
};