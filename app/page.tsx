"use client";

import DayDate from "@/components/main/DayDate";
import FlutedBezel from "@/components/main/FlutedBezel";
import Perpetual from "@/components/main/Perpetual";
import PlanetInitiative from "@/components/main/PlanetInitiative";
import { useState } from "react";

export default function Home() {
  const [index, setindex] = useState(null);

  return (
    <main className="relative w-[full] h-[400vh]">
      <DayDate />
      {!index && <FlutedBezel />}
      <Perpetual setindex={setindex} />
      {index && <PlanetInitiative />}
    </main>
  );
}
