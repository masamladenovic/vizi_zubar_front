import React from "react";
import "../components/CSS/AppointmentForm.css";
import { FaUser, FaPhone, FaCalendarAlt, FaClock } from "react-icons/fa";

const AppointmentForm = () => {
  return (
    <form
      className="appointment-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <div className="input-wrapper">
          <FaUser className="icon" />
          <input type="text" name="name" id="name" placeholder="John Doe" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <div className="input-wrapper">
          <FaPhone className="icon" />
          <input type="tel" name="phone" id="phone" placeholder="Your Phone" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="date">Preferred Date</label>
        <div className="input-wrapper">
          <FaCalendarAlt className="icon" />
          <input type="date" name="date" id="date" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="time">Preferred Time</label>
        <div className="input-wrapper">
          <FaClock className="icon" />
          <input type="time" name="time" id="time" />
        </div>
      </div>
      <button type="submit">Book an Appointment</button>
    </form>
  );
};

export default AppointmentForm;
