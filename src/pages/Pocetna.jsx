import React from "react";
import HeroSekcija from "../components/HeroSekcija";
import AboutUsSection from "../components/AboutUsSection";

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
    </>
  );
};

export default Pocetna;
