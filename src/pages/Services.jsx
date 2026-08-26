import FAQ from "../components/FAQ";
import HeroOstaleStranice from "../components/HeroOstaleStranice";
import Newsletter from "../components/Newsletter";
import ServiceCard from "../components/ServiceCard";
import Traka from "../components/Traka";
import ZakazivanjeForma from "../components/ZakazivanjeForma";
import "./CSS/Services.css";

const Services = () => {
  return (
    <>
      <HeroOstaleStranice naslov={"Services"} />
      <section className="services-section">
        <p className="subtitle">OUR SERVICES</p>
        <h2 className="title">
          <span>A Wide Range of Services</span>
          <br />
          for Your Best Smile
        </h2>

        <div className="cards-container">
          <ServiceCard
            icon="/images/tooth-icon.png"
            image="/images/dentistry.jpg"
            title="General Dentistry"
            description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi maxime dolores veniam architecto, non ullam asperiores at officia culpa qui soluta consequatur nisi libero ratione obcaecati fugit sed nesciunt."
            onLearnMore={() => alert("General Dentistry Details")}
          />
          <ServiceCard
            icon="/images/tooth-icon.png"
            image="/images/dentistry.jpg"
            title="General Dentistry"
            description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi maxime dolores veniam architecto, non ullam asperiores at officia culpa qui soluta consequatur nisi libero ratione obcaecati fugit sed nesciunt."
            onLearnMore={() => alert("General Dentistry Details")}
          />
          <ServiceCard
            icon="/images/tooth-icon.png"
            image="/images/dentistry.jpg"
            title="General Dentistry"
            description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi maxime dolores veniam architecto, non ullam asperiores at officia culpa qui soluta consequatur nisi libero ratione obcaecati fugit sed nesciunt."
            onLearnMore={() => alert("General Dentistry Details")}
          /> 
          <ServiceCard
            icon="/images/tooth-icon.png"
            image="/images/dentistry.jpg"
            title="General Dentistry"
            description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi maxime dolores veniam architecto, non ullam asperiores at officia culpa qui soluta consequatur nisi libero ratione obcaecati fugit sed nesciunt."
            onLearnMore={() => alert("General Dentistry Details")}
          />
          <ServiceCard
            icon="/images/tooth-icon.png"
            image="/images/dentistry.jpg"
            title="General Dentistry"
            description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi maxime dolores veniam architecto, non ullam asperiores at officia culpa qui soluta consequatur nisi libero ratione obcaecati fugit sed nesciunt."
            onLearnMore={() => alert("General Dentistry Details")}
          />
          <ServiceCard
            icon="/images/tooth-icon.png"
            image="/images/dentistry.jpg"
            title="General Dentistry"
            description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi maxime dolores veniam architecto, non ullam asperiores at officia culpa qui soluta consequatur nisi libero ratione obcaecati fugit sed nesciunt."
            onLearnMore={() => alert("General Dentistry Details")}
          />
        </div>
      </section>
      <Traka/>
      <ZakazivanjeForma/>
      <Traka/>
      <FAQ/>
      <Newsletter/>
    </>
  );
};

export default Services;
