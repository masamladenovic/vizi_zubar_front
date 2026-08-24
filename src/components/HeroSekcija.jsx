import React from "react";
import "./CSS/HeroSekcija.css";
import AppointmentForm from "./AppointmentForm";

const HeroSekcija = ({ naslov, opis, dugme1, dugme2, slika }) => {
  //CTA - Call To Action
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="kolona1">
            <h1
              className="hero-naslov"
              dangerouslySetInnerHTML={{ __html: naslov }}
            ></h1>
            <p>{opis}</p>
            <div className="hero-dugmad">
              <button>{dugme1}</button>
              <button className="hero-dugme-link">{dugme2}</button>
            </div>
          </div>
          <div className="kolona2">
            <img className="hero-slika" src={slika} alt="" />
          </div>
        </div>
        <AppointmentForm />
      </section>
    </>
  );
};

export default HeroSekcija;
