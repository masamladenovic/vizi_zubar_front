import "./CSS/ZubarSection.css"
import ZubarCard from "./ZubarCard"

const ZubarSection = ({zubari}) => {
  return (
    <section className="zubar-section">
      <p className="subtitle">OUR TEAM</p>
      <h2 className="title">Meet Our <span>Expert Dental Specialists</span></h2>

      <div className="zubar-grid">
        {zubari.map((zubar,index)=>(
          <ZubarCard
          key={index}
          ime={zubar.ime}
          titula={zubar.titula}
          slika={zubar.slika}
          facebook={zubar.facebook}
          instagram={zubar.instagram}
          linkedin={zubar.linkedin} />
        ))}
      </div>
    </section>
  )
}

export default ZubarSection 