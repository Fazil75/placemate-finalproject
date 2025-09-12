import React from "react";

function Ranking() {
  // Example data (later you can fetch this from backend/Firestore)
  const studentScore = 82; // out of 100
  const contributions = {
    resume: 25,
    aptitude: 20,
    mockInterview: 22,
    quizzes: 15,
  };

  const leaderboard = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 86 },
    { name: "You", score: studentScore }, // current student
    { name: "David", score: 75 },
  ];

  return (
    <div style={pageContainer}>
      <h2 style={heading}>🏆 Placement Readiness Ranking</h2>
      <p style={subText}>Your overall readiness score and peer comparison</p>

      {/* Overall Score */}
      <div style={scoreCard}>
        <h3 style={{ margin: 0 }}>Your Score: {studentScore}/100</h3>
      </div>

      {/* Contributions Breakdown */}
      <div style={section}>
        <h3>📊 Contributions</h3>
        <ul>
          <li>Resume Quality: {contributions.resume}</li>
          <li>Aptitude: {contributions.aptitude}</li>
          <li>Mock Interview: {contributions.mockInterview}</li>
          <li>Quizzes: {contributions.quizzes}</li>
        </ul>
      </div>

      {/* Leaderboard */}
      <div style={section}>
        <h3>🏅 Leaderboard</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor:
                    entry.name === "You" ? "#e0e7ff" : "transparent",
                }}
              >
                <td style={tdStyle}>{entry.name}</td>
                <td style={tdStyle}>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styling
const pageContainer = { padding: "2rem", fontFamily: "Inter, sans-serif" };
const heading = { color: "#6366f1", marginBottom: "0.5rem" };
const subText = { marginBottom: "1.5rem", color: "#555" };
const scoreCard = {
  backgroundColor: "#eef2ff",
  padding: "1rem",
  borderRadius: "8px",
  marginBottom: "1.5rem",
};
const section = { marginBottom: "1.5rem" };
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};
const thStyle = {
  borderBottom: "2px solid #ccc",
  textAlign: "left",
  padding: "0.5rem",
};
const tdStyle = {
  borderBottom: "1px solid #ddd",
  padding: "0.5rem",
};

export default Ranking;
