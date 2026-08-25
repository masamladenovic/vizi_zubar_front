import React from "react";
import HeroSekcija from "../components/HeroSekcija";
import AboutUsSection from "../components/AboutUsSection";
import Traka from "../components/Traka";
import OurServices from "../components/OurServices";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import CaseStoriesSection from "../components/CaseStoriesSection";
import HowItWorksSection from "../components/HowItWorksSection";

const Pocetna = () => {
  return (
    <>
      <HeroSekcija
        naslov={"Your <span>Best Dental Experience</span> Awaits"}
        opis={
          "Enjoy comfortable, personalized dental care in a welcoming environment. Your smile deserves the best care and attention."
        }
        dugme1={"Explore our Services"}
        dugme2={"Watch Video"}
        slika={"../../images/hero-doktorka.png"}
      />
      <AboutUsSection />
      <Traka />
      <OurServices />
      <Traka />
      <WhyChooseUsSection/>
      <CaseStoriesSection/>
      <HowItWorksSection/>
      <Traka/>
    </>
  );
};

export default Pocetna;
