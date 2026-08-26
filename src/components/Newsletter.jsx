import { MdEmail } from "react-icons/md";
import "./CSS/Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-container">
      <p className="subtitle">OUR NEWSLETTER</p>
      <h2 className="title">
        Subscribe To Our Newsletter For the
        <span> Latest Updates and Offers</span>
      </h2>

      <form className="newsletter-form">
        <div className="input-wrapper">
          <span className="email-icon">
            <MdEmail />
          </span>
          <input type="email" placeholder="Enter Email Address" required />
        </div>

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
