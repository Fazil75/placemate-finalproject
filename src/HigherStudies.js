import React from "react";

function HigherStudies() {
  return (
    <div style={pageContainer}>
      <h2 style={{ color: "#6366f1" }}>🎓 Higher Studies Guidance</h2>

      <h3>🌍 Country/University Recommendations</h3>
      <ul>
        <li>USA – MIT, Stanford, Harvard</li>
        <li>UK – Oxford, Cambridge</li>
        <li>Germany – TU Munich, RWTH Aachen</li>
      </ul>

      <h3>💰 Scholarships & Deadlines</h3>
      <ul>
        <li>Fulbright Scholarship – Deadline: Oct 1</li>
        <li>Chevening UK Scholarship – Deadline: Nov 7</li>
        <li>DAAD Germany – Deadline: Dec 15</li>
      </ul>
    </div>
  );
}

const pageContainer = { padding: "2rem", fontFamily: "Inter, sans-serif" };

export default HigherStudies;
