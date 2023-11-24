import DayDate from "@/components/main/DayDate";
import FlutedBezel from "@/components/main/FlutedBezel";

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[300vh] overflow-y-scroll">
      <DayDate />
      <FlutedBezel />
    </div>
  );
}
