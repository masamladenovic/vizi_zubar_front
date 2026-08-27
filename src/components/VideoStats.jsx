import { useState, useRef } from "react"
import "./CSS/VideoStats.css"
import { FaPlay } from "react-icons/fa"

const VideoStats = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Opcionalno: ako korisnik klikne pauzu na samom videu da se vrati dugme
  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="video-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-element"
          src={videoSrc}
          controls={isPlaying}
          preload="metadata"
          onPause={handlePause}
        />
        {!isPlaying && (
          <button className="play-button" onClick={handlePlay}>
            <FaPlay />
          </button>
        )}
      </div>

      <div className="stats-bar">
        <div className="stat">
          <h3>10+</h3>
          <p>Skilled Doctors</p>
        </div>
        <div className="stat">
          <h3>15+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3>20K+</h3>
          <p>Appointments Booked</p>
        </div>
        <div className="stat">
          <h3>99%</h3>
          <p>Patient Satisfaction</p>
        </div>
      </div>
    </section>
  )
}

export default VideoStats