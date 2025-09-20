import React, { useState } from "react";

function ManageStudentsPage() {
  // Sample student data (replace with Firestore fetch later)
  const [students, setStudents] = useState([
    { id: 1, name: "Arjun Kumar", status: "pending" },
    { id: 2, name: "Sneha R", status: "verified" },
    { id: 3, name: "Rahul M", status: "approved" }
  ]);

  const handleAction = (id, newStatus) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, status: newStatus } : s
    ));
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>👨‍🎓 Manage Students</h2>

      {/* Verify New Students */}
      <section style={sectionStyle}>
        <h3 style={subHeadingStyle}>🔍 Verify Student Registrations</h3>
        {students.filter(s => s.status === "pending").length === 0 ? (
          <p>No students awaiting verification.</p>
        ) : (
          students
            .filter(s => s.status === "pending")
            .map(student => (
              <div key={student.id} style={cardStyle}>
                <span>{student.name}</span>
                <div>
                  <button 
                    style={approveBtn} 
                    onClick={() => handleAction(student.id, "verified")}
                  >
                    Verify
                  </button>
                  <button 
                    style={rejectBtn} 
                    onClick={() => handleAction(student.id, "rejected")}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
        )}
      </section>

      {/* Approve/Reject Students */}
      <section style={sectionStyle}>
        <h3 style={subHeadingStyle}>✅ Approve/Reject Verified Students</h3>
        {students.filter(s => s.status === "verified").length === 0 ? (
          <p>No students awaiting approval.</p>
        ) : (
          students
            .filter(s => s.status === "verified")
            .map(student => (
              <div key={student.id} style={cardStyle}>
                <span>{student.name}</span>
                <div>
                  <button 
                    style={approveBtn} 
                    onClick={() => handleAction(student.id, "approved")}
                  >
                    Approve
                  </button>
                  <button 
                    style={rejectBtn} 
                    onClick={() => handleAction(student.id, "rejected")}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
        )}
      </section>
    </div>
  );
}

// Styles
const pageStyle = { padding: "2rem", fontFamily: "Inter, sans-serif" };
const headingStyle = { color: "#6366f1", marginBottom: "1rem" };
const subHeadingStyle = { margin: "1rem 0", color: "#4f46e5" };
const sectionStyle = { marginBottom: "2rem" };
const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.75rem 1rem",
  marginBottom: "0.75rem",
  background: "#f9fafb",
  borderRadius: "0.5rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
};
const approveBtn = {
  background: "#22c55e",
  color: "#fff",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  marginRight: "0.5rem",
  cursor: "pointer"
};
const rejectBtn = {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  cursor: "pointer"
};

export default ManageStudentsPage;
