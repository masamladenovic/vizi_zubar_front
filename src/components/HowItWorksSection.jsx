import "./CSS/HowItWorksSection.css";
import {
  FaCalendarAlt,
  FaUsers,
  FaBriefcase,
  FaClipboardCheck,
} from "react-icons/fa";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FaCalendarAlt />,
      number: "01",
      title: "Book Your Appointment",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      icon: <FaUsers />,
      number: "02",
      title: "Consultation & Examination",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      icon: <FaBriefcase />,
      number: "03",
      title: "Personalised Treatment Plan",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      icon: <FaClipboardCheck />,
      number: "04",
      title: "Ongoing Care & Followup",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
  ];

  return (
    <section className="how-section">
      <p className="subtitle">HOW IT WORKS</p>
      <h2 className="title">
        The Path To <span>Your Perfect Smile</span>
      </h2>

      <div className="how-steps">
        {steps.map((step, index) => (
          <div className="how-step" key={index}>
            <div className="how-icon-wrapper">
              <div className="how-icon-circle">
                {step.icon}
                <div className="how-number">{step.number}</div>
              </div>
            </div>

            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
            {index < steps.length - 1 && <div className="step-line" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
