import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/api";
import ProfileCard from "../components/ProfileCard";
import "./ProfessionalsList.css";

function ProfessionalsList() {
  const [profCards, setProfCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const data = await API.getPortfolios();
        setProfCards(data);
      } catch (error) {
        navigate("/404", {
          replace: true,
          state: {
            from: window.location.pathname,
            status: 404,
            message: "Error loading professionals",
          },
        });
      } finally {
        setLoading(false);
      }
    }
    fetchProfessionals();
  }, [navigate]);

  return (
    <div className="professionals-list">
      <div className="professionals-header">
        <h1>All Professionals</h1>
        <button className="add-profile-btn" onClick={() => navigate("/templates")}>
          + List Your Profile
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading professionals...</div>
      ) : profCards.length > 0 ? (
        <div className="prof-cards">
          {profCards.map((card) => (
            <ProfileCard key={card.id} profileDetails={card} />
          ))}
        </div>
      ) : (
        <div className="no-results">No professionals found</div>
      )}
    </div>
  );
}

export default ProfessionalsList;