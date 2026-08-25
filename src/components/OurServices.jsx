import ServiceCard from "./ServiceCard";
import "./CSS/OurServices.css";
import { TbLayoutGridRemove } from "react-icons/tb";

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="services-content">
        <div>
          <p className="subtitle">OUR SERVICES</p>
          <h2 className="title">
            <span>A Wide Range of Services</span>
            <br />
            for Your Best Smile
          </h2>
        </div>

        <button className="explore-btn">Explore All Services</button>
      </div>

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
      </div>
    </section>
  );
};

export default OurServices;
