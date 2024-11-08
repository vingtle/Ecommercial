import PropTypes from "prop-types";
import { useState } from "react";
import "./language.css";

function Language({ isOpen, onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  if (!isOpen) return null;

  return (
    <div id="language-overlay">
      <div className="language-conte">
        <button type="button" className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Select Language</h2>
        <form>
          <label>
            <input
              type="radio"
              name="language"
              value="English"
              checked={selectedLanguage === "English"}
              onChange={() => setSelectedLanguage("English")}
            />
            <span role="img" aria-label="flag">
              🇺🇸
            </span>{" "}
            English
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="French"
              checked={selectedLanguage === "French"}
              onChange={() => setSelectedLanguage("French")}
            />
            <span role="img" aria-label="flag">
              🇫🇷
            </span>{" "}
            French
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="Spanish"
              checked={selectedLanguage === "Spanish"}
              onChange={() => setSelectedLanguage("Spanish")}
            />
            <span role="img" aria-label="flag">
              🇪🇸
            </span>{" "}
            Spanish
          </label>
          <div className="remember-selection">
            <input type="checkbox" id="remember-selection" />
            <label htmlFor="remember-selection">Remember my selection</label>
          </div>
          <button type="button" className="save-btn" onClick={onClose}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

Language.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Language;
