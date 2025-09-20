import React from 'react';

function VerifyStudentsPage() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>👨‍🎓 Verify Student Registrations</h2>
      <p>Here the department can review and validate new student registrations.</p>
    </div>
  );
}

const pageStyle = { padding: "2rem", fontFamily: "Inter, sans-serif" };
const headingStyle = { color: "#6366f1", marginBottom: "1rem" };

export default VerifyStudentsPage;
