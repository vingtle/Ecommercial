import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../modal/contact/Contact";
import Language from "../modal/language/Language";
import TreatmentsDropdown from "./TreatmentsDropdown";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [isContactOpen, setContactOpen] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);
  const openLanguage = () => setLanguageOpen(true);
  const closeLanguage = () => setLanguageOpen(false);

  return (
    <div id="navbar">
      <div
        onClick={() => navigate("/")}
        className="nav-logo"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => e.key === 'Enter' && navigate("/")}
      >
        MYMI Conseil
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="navbar-search-input" />
      </div>
      <div
        onClick={() => navigate("/Home/homepage")}
        className="nav-btn"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => e.key === 'Enter' && navigate("/Home/homepage")}
      >
        Home
      </div>
      <div
        role="button"
        tabIndex="0"
        onClick={() => navigate("/Treatments")}
        className="nav-btn"
        onKeyDown={(e) => e.key === 'Enter' && navigate("/Treatments")}
      >
        Treatments
        <TreatmentsDropdown />
      </div>
      <div
        role="button"
        tabIndex="0"
        onClick={() => navigate("/Galleries")}
        className="nav-btn"
        onKeyDown={(e) => e.key === 'Enter' && navigate("/Galleries")}
      >
        Galleries
      </div>
      <div
        role="button"
        tabIndex="0"
        onClick={() => navigate("/MyProfile")}
        className="nav-btn"
        onKeyDown={(e) => e.key === 'Enter' && navigate("/MyProfile")}
      >
        My Profile
      </div>
      <div
        role="button"
        tabIndex="0"
        onClick={openContact}
        className="nav-btn"
        onKeyDown={(e) => e.key === 'Enter' && openContact()}
      >
        Contact
      </div>
      <div
        role="button"
        tabIndex="0"
        onClick={openLanguage}
        className="nav-btn"
        onKeyDown={(e) => e.key === 'Enter' && openLanguage()}
      >
        Language
      </div>
      <Contact isOpen={isContactOpen} onClose={closeContact} />
      <Language isOpen={isLanguageOpen} onClose={closeLanguage} />
    </div>
  );
}

export default Navbar;
