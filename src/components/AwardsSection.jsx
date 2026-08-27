import "./CSS/AwardsSection.css";

const AwardsSection = () => {
  const awards = [
    {
      image: "/images/nagrada.png",
      year: 2024,
      title: "Smile Excellence Award",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores commodi.",
    },
    {
      image: "/images/nagrada.png",
      year: 2023,
      title: "Trusted Dentist Award",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores commodi.",
    },
    {
      image: "/images/nagrada.png",
      year: 2022,
      title: "Advanced Dental Solutions Award",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores commodi.",
    },
    {
      image: "/images/nagrada.png",
      year: 2021,
      title: "Premier Dental Provider Award",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores commodi.",
    },
  ];
  return (
    <section className="award-section">
      <p className="subtitle">OUR AWARDS</p>
      <h2 className="title">
        <span>Award Winning</span> Dental Care
      </h2>
      <div className="award-grid">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <div className="award-image">
              <img src={award.image} alt={award.title} />
            </div>
            <div className="award-content">
              <p className="award-year">{award.year}</p>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-description">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
