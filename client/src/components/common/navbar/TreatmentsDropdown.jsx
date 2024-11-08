import { useNavigate } from "react-router-dom";
import "./treatmentsdropdown.css";

function TreatmentsDropdown() {
  const navigate = useNavigate();

  return (
    <div id="treatments-dropdown">
      <span className="dropdown-title">Treatments</span>
      <div className="dropdown-content">
      <div
         role="button"
         tabIndex="0"
         onClick={() => navigate("treatments/advanced-skin-care")}
         onKeyDown={(e) => e.key === 'Enter' && navigate("treatments/advanced-skin-care")}
        >
        Advanced Skin Care
        </div>

        <div role="button" tabIndex="0" 
        onClick={() => navigate("treatments/hair-scalp-care")}
        onKeyDown={(e) => e.key === 'Enter' && navigate("treatments/hair-scalp-care")}>
        Hair & Scalp Care
        </div>
        <div role="button" tabIndex="0"
         onClick={() => navigate("treatments/waxing")}
         onKeyDown={(e) => e.key === 'Enter' && navigate("treatments/waxing")}>
        Waxing
        </div>

        <div role="button" tabIndex="0"
         onClick={() => navigate("/treatments/massages")}
         onKeyDown={(e) => e.key === 'Enter' && navigate("treatments/massages")}>
         Massages
         </div>

        <div role="button" tabIndex="0" 
         onClick={() => navigate("/treatments/manicures-pedicures")}
         onKeyDown={(e) => e.key === 'Enter' && navigate("treatments/manicures-pedicures")}>
         Manicures & Pedicures
        </div>

        <div role="button" tabIndex="0"
         onClick={() => navigate("/treatments/eyelash-extentions")}
         onKeyDown={(e) => e.key === 'Enter' && navigate("treatments/eyelash-extensions")}>
         EyeLash Extensions & Lifts
        </div>
      </div>
    </div>
  );
}

export default TreatmentsDropdown;
