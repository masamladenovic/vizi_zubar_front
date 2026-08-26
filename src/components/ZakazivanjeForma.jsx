import "./CSS/ZakazivanjeForma.css";
import {FaPhoneAlt} from "react-icons/fa"

const ZakazivanjeForma = () => {
  return (
    <section className="zakazivanje-container">
      <div className="forma-levo">
        <p className="subtitle">BOOK AN APPOINTMENT</p>
        <h2 className="title">
          <span>Effortless Online Booking</span> For Your Dental Visit
        </h2>

        <form className="forma-grid">
          <div className="input-par">
            <label>Your Name *</label>
            <input type="text" placeholder="Ex. John Doe" required />
          </div>

          <div className="input-par">
            <label>Phone Number *</label>
            <input type="tel" placeholder="Enter Phone Number" required />
          </div>

          <div className="input-par">
            <label>Type of Appointment *</label>
            <select required>
              <option value="">Type of Appointment *</option>
              <option value="cleaning">Cleaning</option>
              <option value="checkup">Checkup</option>
              <option value="surgery">Surgery</option>
            </select>
          </div>

          <div className="input-par">
            <label>Preferred Dentist *</label>
            <select required>
              <option value="drbrown">Dr. David Brown</option>
              <option value="drsmith">Dr. Sarah Smith</option>
            </select>
          </div>

          <div className="input-par">
            <label>Preferred Date *</label>
            <input type="date" defaultValue="2024-11-25" required />
          </div>

          <div className="input-par">
            <label>Preferred Time *</label>
            <input type="time" defaultValue="10:00" required />
          </div>

          <div className="input-par">
            <label>Special Requests or Notes *</label>
            <textarea placeholder="Enter Here..." required></textarea>
          </div>

          <div className="dugme">
            <button type="submit">Book an Appointment</button>
          </div>
        </form>
      </div>

      <div className="informacije-desno">
        <p className="opis-klinike">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          obcaecati ea animi similique suscipit accusantium. Commodi laborum
          molestiae voluptatem excepturi obcaecati!{" "}
        </p>
        <div className="radno-vreme">
          <h4>Clinic Hours</h4>
          <ul>
            <li>
              <span>Monday to Friday</span>
              <span>09:00 - 22:00</span>
            </li>
            <li>
              <span> Saturday</span>
              <span>11:00 - 20:00</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>

         <div className="faq-emergency-card">
                    <div className="faq-phone-icon">
                      <FaPhoneAlt />
                    </div>
        
                    <div>
                      <p className="faq-priority">
                        Your Smile, Our Priority
                      </p>
        
                      <h3>24/7 Emergency</h3>
        
                      <p className="faq-phone-number">
                        (000) 000-0000
                      </p>
                    </div>
                  </div>
      </div>
    </section>
  );
};

export default ZakazivanjeForma;
