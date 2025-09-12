import React from "react";
import { useNavigate } from "react-router-dom";

function CareerGuidanceDashboard() {
  const navigate = useNavigate();

  return (
    <div style={dashboardContainer}>
      <header style={bannerStyle}>
        <h1>🎯 Career Guidance Hub</h1>
        <p>Choose a path to explore guidance and opportunities</p>
      </header>

      <nav style={navStyle}>
        <button style={navButton} onClick={() => navigate("/exam-notifications")}>
          📢 Exam Notifications
        </button>
        <button style={navButton} onClick={() => navigate("/higher-studies")}>
          🎓 Higher Studies Guidance
        </button>
        <button style={navButton} onClick={() => navigate("/internship-updates")}>
          💼 Internship Updates
        </button>
      </nav>
    </div>
  );
}

const dashboardContainer = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)",
  fontFamily: "Inter, system-ui, sans-serif",
  padding: "2rem",
};

const bannerStyle = {
  background: "#8b5cf6",
  color: "#fff",
  borderRadius: "1rem",
  padding: "2rem",
  marginBottom: "2rem",
  textAlign: "center",
  boxShadow: "0 4px 24px rgba(139,92,246,0.15)",
};

const navStyle = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  flexWrap: "wrap",
};

const navButton = {
  background: "#6366f1",
  color: "#fff",
  border: "none",
  borderRadius: "0.5rem",
  padding: "1rem 2rem",
  fontWeight: "bold",
  fontSize: "1.1rem",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(99,102,241,0.3)",
};

export default CareerGuidanceDashboard;
