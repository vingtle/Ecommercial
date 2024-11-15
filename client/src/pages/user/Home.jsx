import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaPhoneAlt } from "react-icons/fa";
import "./home.css";

function Home() {
  const navigate = useNavigate(); 

  
  const treatmentCategories = [
    { id: 1, name: "Advanced Skin Care", path: "/treatments/advanced-skin-care" },
    { id: 2, name: "Hair and Scalp Care", path: "/treatments/hair-scalp-care" },
    { id: 3, name: "Waxing", path: "/treatments/waxing" },
    { id: 4, name: "Massages", path: "/treatments/massages" },
    { id: 5, name: "Eyelash Extensions & Lifts", path: "/treatments/eyelash-extensions-lifts" },
    { id: 6, name: "Manicures & Pedicures", path: "/treatments/manicures-pedicures" },
  ];

  // State to hold the reviews
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from backend API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Replace the URL below with your actual API endpoint
        const response = await fetch("/api/reviews?limit=2&sortBy=date_desc");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div id="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Find your privacy, tailored beauty just for you</h1>
          <div className="hero-buttons">
            <button type="button"
              className="secondary-btn"
              onClick={() => navigate("/Galleries")} // Navigate to Galleries page
            >
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <section className="treatment-categories">
        <h2>Treatment Categories</h2>
        <div className="category-container">
          {treatmentCategories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => navigate(category.path)} 
              role="button"
              tabIndex="0"
              onKeyDown={(e) => e.key === 'Enter' && navigate(category.path)}
            >
              {category.name}
            </div>
          ))}
        </div>
      </section>

      <section className="about-salon">
        <h2>About Our Salon</h2>
        <p>
          Experience luxury and relaxation at our state-of-the-art beauty salon.
          Our expert stylists and aestheticians are dedicated to enhancing your
          natural beauty and providing a rejuvenating experience.
        </p>
        <div className="salon-details">
          <div>
            <h3>Opening Hours</h3>
            <p>Monday - Sunday: 9:00 AM - 10:00 PM</p>
          </div>
          <div>
            <h3>Contact Information</h3>
            <div className="footer-icon-text">
                            <FaPhoneAlt className="footer-icon" />
                            <a href="tel:+33610322965" className="footer-link">
                                +33(0) 610322965
                            </a>
                        </div>
                        <p>
        <strong>Email:</strong> 
        <a href="mailto:mymiconsult@gmail.com" className="email-link">
          mymiconsult@gmail.com
        </a>
      </p>
            <p>
              13 Rue des Gentilhommieres, 91700 Villiers sur Orge, France
            </p>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="client-reviews">
        <h2>Client Reviews</h2>
        <p>★★★★★ 5 Stars (based on 55 reviews)</p>
        <div className="review-container">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="review-card">
                <h4>{review.name}</h4>
                <p>{review.review_text}</p>
              </div>
            ))
          ) : (
            <p>No reviews available at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
