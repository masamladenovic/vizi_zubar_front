import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pocetna from "./pages/Pocetna";
import Services from "./pages/Services";
import Navbar from "./components/navigacija/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
