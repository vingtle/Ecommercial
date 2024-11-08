import PropTypes from "prop-types";
import "./contact.css";

function Contact({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div id="contact-overlay">
      <div className="contact-content">
        <button type="button" className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>We'd love to hear from you!</h2>
        <p>Send us a message directly through Google Business</p>
        <a
          href="http://business.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="google-business-btn"
        >
          Message us on Google Business
        </a>
        <p className="small-text">
          You'll be redirected to Google Business Message to continue the
          conversation
        </p>
      </div>
    </div>
  );
}

Contact.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Contact;
