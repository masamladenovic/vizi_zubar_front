import HeroOstaleStranice from "../components/HeroOstaleStranice";
import useZubari from "../components/hooks/useZubari";
import Traka from "../components/Traka";
import ZubarSection from "../components/ZubarSection";
import ZakazivanjeForma from "../components/ZakazivanjeForma";
import "./CSS/Dentists.css";
import VideoStats from "../components/VideoStats";
import Newsletter from "../components/Newsletter";

const Dentists = () => {
  const zubari = useZubari();

  return (
    <>
      <HeroOstaleStranice naslov={"Dentists"} />
      <ZubarSection zubari={zubari} />
      <Traka/>
      <ZakazivanjeForma/>
      <Traka/>
      <VideoStats videoSrc={"../../videos/video1.mp4"}/>
      <Newsletter/>
      <Traka/>
    </>
  );
};

export default Dentists;
