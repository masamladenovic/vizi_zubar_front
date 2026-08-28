import { useNavigate } from "react-router-dom";
import "./CSS/NotFound.css"

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">
        Oops! <span>Page not Found</span>
        <p className="not-found-text">The page you are looking for cannot be found. Take a break before trying again.</p>
        <button className="not-found-button" onClick={()=>navigate("/")}>Go To Homepage</button>
      </h2>
    </div>
  )
}

export default NotFound 