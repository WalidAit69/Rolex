"use client";

import DayDate from "@/components/main/DayDate";
import FlutedBezel from "@/components/main/FlutedBezel";
import Perpetual from "@/components/main/Perpetual";
import PlanetInitiative from "@/components/main/PlanetInitiative";
import { useState } from "react";

export default function Home() {
  const [index, setindex] = useState(null);


  return (
    <div className="relative w-[100vw] h-[400vh] overflow-y-scroll">
      <DayDate />
      {!index && <FlutedBezel />}
      <Perpetual setindex={setindex}/>
      {index && <PlanetInitiative />}
    </div>
  );
}
