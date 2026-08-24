import "./CSS/AboutUsSection.css";
import { FaCheckCircle } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="../../../images/about-us.png" alt="" />
        </div>
        <div className="about-text">
          <p className="about-subtitle">ABOUT US</p>
          <h2>
            <span className="highlight">15 Years of Expertise</span> in Dental
            Care
          </h2>
          <p className="about-description">
            For over 15 years, we have been providing compassionate,
            personalized dental care in a comfortable and welcoming environment. Our experienced team combines modern technology with a gentle approach to help every patient achieve a healthy, confident smile.
          </p>
          <ul className="about-list">
            <li>
              <FaCheckCircle className="icon" /> Premium Dental Services You Can Trust
            </li>
            <li>
              <FaCheckCircle className="icon" /> Award-Winning Experts in Dental Care
            </li>
            <li>
              <FaCheckCircle className="icon" /> Dedicated Experts Behind Every Smile
            </li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
