import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./CSS/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lesli Alexander",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Professional and friendly!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci ratione itaque accusamus maxime eum assumenda eaque tempore repellendus.",
      image: "./../../images/testimonials1.png",
    },
    {
      name: "Bessie Lane",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Highly Recommended!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci ratione itaque accusamus maxime eum assumenda eaque tempore repellendus.",
      image: "./../../images/testimonials2.png",
    },
    {
      name: "Cameron Blake",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Amazing experience!",
      text: "The staff was very professional, kind and welcoming. Everything was explained clearly and I felt comfortable throughout my appointment.",
      image: "./../../images/testimonials3.png",
    },
    {
      name: "Sophia Miller",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Very caring team!",
      text: "I am extremely happy with the service. The entire team was friendly and professional, and the results exceeded my expectations.",
      image: "./../../images/testimonials4.png",
    },
    {
      name: "Olivia Carter",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Highly professional!",
      text: "From the moment I walked in, I felt comfortable and well taken care of. I would definitely recommend this dental clinic.",
      image: "./../../images/testimonials5.png",
    },
    {
      name: "James Wilson",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Great service!",
      text: "The appointment was quick, easy and completely stress-free. The staff was wonderful and the clinic looks beautiful.",
      image: "./../../images/testimonials6.png",
    },
    {
      name: "Emma Johnson",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Wonderful experience!",
      text: "I had a fantastic experience from start to finish. Everyone was helpful, friendly and very attentive to my needs.",
      image: "./../../images/testimonials7.png",
    },
    {
      name: "Daniel Brown",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Excellent dentist!",
      text: "I finally found a dental team I can trust. They were patient, professional and made the whole process very comfortable.",
      image: "./../../images/testimonials8.png",
    },
    {
      name: "Ava Thompson",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "Friendly and welcoming!",
      text: "Everyone at the clinic was incredibly friendly. I felt relaxed during my entire visit and I am very happy with the results.",
      image: "./../../images/testimonials9.png",
    },
    {
      name: "William Davis",
      role: "Satisfied Patient",
      rating: 5.0,
      title: "I highly recommend them!",
      text: "The quality of care was excellent and the staff was very professional. I would definitely recommend this clinic to my friends and family.",
      image: "./../../images/testimonials10.png",
    },
  ];

  return (
    <section className="testimonial-section">
      <p className="subtitle beli">TESTIMONIALS</p>

      <h2 className="title beli">
        What Our <span>Patients Have to Say</span>
      </h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="testimonials-swiper"
      >
        {Array.from({ length: 5 }).map((_, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="testimonials-wrapper">
              {testimonials
                .slice(slideIndex * 2, slideIndex * 2 + 2)
                .map((t, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar className="star-icon" key={i} />
                      ))}

                      <span className="rating-score">
                        {t.rating.toFixed(1)}
                      </span>
                    </div>

                    <h3 className="testimonial-title">{t.title}</h3>

                    <p className="testimonial-text">{t.text}</p>

                    <div className="testimonial-user">
                      {t.image && (
                        <img src={t.image} alt={t.name} />
                      )}

                      <div>
                        <p className="name">{t.name}</p>
                        <p className="role">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;