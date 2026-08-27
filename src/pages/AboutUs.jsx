import AboutUsSection from "../components/AboutUsSection";
import HeroOstaleStranice from "../components/HeroOstaleStranice";
import Traka from "../components/Traka";
import {FaEye, FaRocket} from "react-icons/fa"
import "./CSS/AboutUs.css"
import VideoStats from "../components/VideoStats";
import Testimonials from "../components/Testimonials";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ZubarSection from "../components/ZubarSection";
import useZubari from "../components/hooks/useZubari";
import AwardsSection from "../components/AwardsSection";
import ZakazivanjeForma from "../components/ZakazivanjeForma";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";

const AboutUs = () => {
  const zubari = useZubari();

  return (
    <>
      <HeroOstaleStranice naslov={"About Us"} />
      <AboutUsSection />
      <Traka />
      <section className="vm-section">
        <div className="vm-card">
          <div className="vm-icon-container">
            <FaRocket className="vm-icon" />
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis ipsa. Perspiciatis nostrum facilis minus, repellat praesentium aspernatur sed quam illum a inventore totam nulla numquam delectus maiores est soluta?</p>
          </div>
        </div>

        <div className="vm-card">
          <div className="vm-icon-container">
            <FaEye className="vm-icon" />
          </div>

          <div>
            <h3>Our Mission</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis ipsa. Perspiciatis nostrum facilis minus, repellat praesentium aspernatur sed quam illum a inventore totam nulla numquam delectus maiores est soluta?</p>
          </div>
        </div>

      </section>

      <VideoStats videoSrc="videos/video1.mp4"/>
      <Traka/>
      <WhyChooseUsSection/>
      <Testimonials/>
      <HowItWorksSection/>
      <ZubarSection zubari={zubari.slice(0,3)}/>
      <AwardsSection/>
      <FAQ boja={"tegetSekcija"}/>
      <ZakazivanjeForma/>
      <Newsletter/>
    </>
  );
};

export default AboutUs;
