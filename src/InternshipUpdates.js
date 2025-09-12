import React from "react";

function InternshipUpdates() {
  const internships = [
    { title: "Google Summer of Code", deadline: "10th Sept", link: "https://summerofcode.withgoogle.com" },
    { title: "Microsoft Research Internship", deadline: "30th Sept", link: "https://research.microsoft.com" },
    { title: "ISRO Research Program", deadline: "15th Oct", link: "https://isro.gov.in" },
  ];

  return (
    <div style={pageContainer}>
      <h2 style={{ color: "#6366f1" }}>💼 Internship Updates</h2>
      <ul>
        {internships.map((intern, idx) => (
          <li key={idx} style={listItem}>
            <strong>{intern.title}</strong> — Deadline: {intern.deadline}
            <a href={intern.link} target="_blank" rel="noreferrer" style={applyLink}>
              Apply with Profile
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

export default InternshipUpdates;
