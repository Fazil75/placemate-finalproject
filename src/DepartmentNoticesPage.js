import React from 'react';

function DepartmentNoticesPage() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>📢 Department Notices</h2>
      <p>Here the department can publish important announcements and updates.</p>
    </div>
  );
}

const pageStyle = { padding: "2rem", fontFamily: "Inter, sans-serif" };
const headingStyle = { color: "#6366f1", marginBottom: "1rem" };

export default DepartmentNoticesPage;
