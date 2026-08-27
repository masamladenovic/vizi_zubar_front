import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./CSS/ZubarCard.css"

const ZubarCard = ({ime, titula, slika, facebook, instagram, linkedin}) => {
  return (
    <div className="zubar-card">
      <div className="zubar-slika">
        <img src={slika} alt={ime} />
      </div>
      <div className="social-icons">
        {facebook &&(
          <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        )}
        {instagram &&(
          <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        )}
        {linkedin &&(
          <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        )}
      </div>

      <div className="zubar-info">
        <h3>{ime}</h3>
        <p>{titula}</p>
    </div>
    </div>

    
  )
}

export default ZubarCard  