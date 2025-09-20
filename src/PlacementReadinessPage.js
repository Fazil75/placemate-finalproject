import React from 'react';

function PlacementReadinessPage() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>📊 Track Placement Readiness</h2>
      <p>Here the department can monitor students’ placement preparation and readiness.</p>
    </div>
  );
}

const pageStyle = { padding: "2rem", fontFamily: "Inter, sans-serif" };
const headingStyle = { color: "#6366f1", marginBottom: "1rem" };

export default PlacementReadinessPage;
