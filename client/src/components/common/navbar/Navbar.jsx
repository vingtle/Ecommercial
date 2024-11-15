import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import TreatmentsDropdown from "./TreatmentsDropdown";
import Contact from "../modal/contact/Contact";
import Language from "../modal/language/Language";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

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
        <SearchInput />
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
      <div className="nav-btn">
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
      <div className="nav-btn">
      <Contact />
      </div>
      <div className="nav-btn">
      <Language />
      </div>
    </div>
  );
}

export default Navbar;
