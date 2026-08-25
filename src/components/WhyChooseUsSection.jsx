import "./CSS/WhyChooseUsSection.css";
import { FaCheckCircle, FaPlay } from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <section className="why-section">
      <div className="why-header">
        <p className="subtitle">WHY CHOOSE US</p>
        <h2 className="title">
          Benefits of Our Dental Services: <br />
          <span>Your Path to A Healthier Smile</span>
        </h2>
      </div>

      <div className="why-content">
        <div className="why-left">
          <div
            className="video-thumbnail"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=whWPO1Ms_zU",
                "_blank",
              )
            }
          >
            <img src="../../images/dentistry.jpg" alt="Why choose us" />

            <div className="overlay-circles"></div>
            <div className="play-button">
              <div className="circle"></div>
              <FaPlay className="triangle" />
            </div>
          </div>

          <img src="../../images/stars.png" className="stars" alt="stars" />
          <img
            src="../../images/dots.png"
            className="dots-top-right"
            alt="dots"
          />
        </div>

        <div className="why-right">
          <p className="why-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sit!
            Velit ullam corporis fuga. Quidem, necessitatibus odit! Eligendi
            neque, mollitia illo facilis natus nisi eaque ex vel ad porro
            officiis!
          </p>
          <div className="stats">
            <div>
              <h3>10+</h3>
              <p>Skilled Doctors</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Patient Satisfaction</p>
            </div>
            <div>
              <h3>20K+</h3>
              <p>Appointments Booked</p>
            </div>
          </div>

          <ul className="why-list">
            <li>
              <FaCheckCircle />
              Easy Online Appointment Booking
            </li>
            <li>
              <FaCheckCircle />
              Experienced and Caring Dentists
            </li>
            <li>
              <FaCheckCircle />
              Advanced Dental Equipment
            </li>
          </ul>

          <button className="why-btn">Book An Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
