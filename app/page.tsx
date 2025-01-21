import TopThirdLayer from "./component/TopThirdLayer/TopThirdLayer";
import Hero from "./component/Hero/Hero";
import BestOfAirMax from "./component/BestOfAirMax/BestOfAirMax";
import Featured from "./component/Featured/Featured";
import GearUp from "./component/GearUp/GearUp";
import DontMiss from "./component/DontMiss/DontMiss";
import Essentials from "./component/Essentials/Essentials";
import LastInHome from "./component/LastInHome/LastInHome";

export default function Home() {
  return (
    <div>
        <TopThirdLayer />
      <div className="md:px-[30px] px-[10px]">
        <Hero />
        <BestOfAirMax />
        <Featured />
        <GearUp />
        <DontMiss />
        <Essentials />
        <LastInHome />
      </div>
    </div>


  );
}
