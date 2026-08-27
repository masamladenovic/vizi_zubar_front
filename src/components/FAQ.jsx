import { useState } from "react";
import { FaPlus, FaMinus, FaComments, FaPhoneAlt } from "react-icons/fa";
import "./CSS/FAQ.css";

const FAQ = ({ boja }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of dental services, including general dentistry, teeth whitening, dental implants, orthodontics, dental sealants, and tooth extractions.",
    },
    {
      question: "Do I need to make an appointment?",
      answer:
        "Yes, we recommend making an appointment in advance so our team can provide you with the best possible care. You can easily book your appointment online or contact our clinic directly.",
    },
    {
      question: "Do you accept walk-in appointments?",
      answer:
        "We accept walk-in appointments when availability allows. However, booking an appointment in advance is recommended to avoid waiting and ensure your preferred time.",
    },
    {
      question: "Can I book an emergency dental appointment?",
      answer:
        "Yes, we provide emergency dental care. If you have a dental emergency, contact us as soon as possible and our team will help you find the earliest available appointment.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, online consultations are available for selected dental concerns. Contact our team to find out whether your situation is suitable for an online consultation.",
    },
    {
      question: "What is the cost of a dental consultation?",
      answer:
        "The cost depends on the type of consultation and treatment required. Contact our clinic for detailed information about consultation prices and available services.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`faq-section ${boja ? boja : ""}`}>
      <div className="faq-heading">
        <p className="subtitle">FAQS</p>

        <h2 className="title">
          <span>Dental Care FAQ:</span> Your
          <br className="desktop-break" />
          Questions Answered
        </h2>
      </div>

      <div className="faq-content">
        {/* LEVA STRANA - PITANJA */}
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESNA STRANA */}
        <div className="faq-sidebar">
          <div className="faq-contact-card">
            <div className="faq-contact-icon">
              <FaComments />
            </div>

            <h3>You have different questions?</h3>

            <p>
              Our team will answer all your questions.
              <br />
              We ensure a quick response.
            </p>

            <button className="faq-contact-button">Contact Us</button>
          </div>

          <div className="faq-emergency-card">
            <div className="faq-phone-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="faq-priority">Your Smile, Our Priority</p>

              <h3>24/7 Emergency</h3>

              <p className="faq-phone-number">(000) 000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
