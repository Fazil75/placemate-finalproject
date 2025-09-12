import React from "react";

function ExamNotifications() {
  const exams = [
    { name: "GATE 2025", deadline: "15th Sept", link: "https://gate.iisc.ac.in" },
    { name: "GRE General Test", deadline: "Rolling", link: "https://www.ets.org/gre" },
    { name: "CAT 2025", deadline: "20th Aug", link: "https://iimcat.ac.in" },
    { name: "PSC Kerala", deadline: "30th Sept", link: "https://www.keralapsc.gov.in" },
  ];

  return (
    <div style={pageContainer}>
      <h2 style={{ color: "#6366f1" }}>📢 Exam Notifications</h2>
      <ul>
        {exams.map((exam, idx) => (
          <li key={idx} style={listItem}>
            <strong>{exam.name}</strong> — Deadline: {exam.deadline}
            <a href={exam.link} target="_blank" rel="noreferrer" style={applyLink}>
              Apply Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const pageContainer = { padding: "2rem", fontFamily: "Inter, sans-serif" };
const listItem = { marginBottom: "1rem" };
const applyLink = { marginLeft: "1rem", color: "#8b5cf6", fontWeight: "bold" };

export default ExamNotifications;
