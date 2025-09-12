import React, { useState } from 'react';

function AptitudeQuiz() {
  const [started, setStarted] = useState(false);
  const [timer] = useState(60); // Remove setTimer since it's not used

  // Dummy MCQ
  const questions = [
    { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" }
  ];

  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>Aptitude & Quiz</h2>
      {!started ? (
        <button style={buttonStyle} onClick={() => setStarted(true)}>Start Quiz</button>
      ) : (
        <div>
          <p>Timer: {timer} seconds</p>
          <div>
            {questions.map((q, idx) => (
              <div key={idx} style={questionStyle}>
                <p>{q.q}</p>
                {q.options.map(opt => (
                  <button key={opt} style={optionStyle}>{opt}</button>
                ))}
              </div>
            ))}
          </div>
          <button style={buttonStyle} onClick={() => setStarted(false)}>End Quiz</button>
        </div>
      )}
      <div style={resultStyle}>
        <h3>Analytics</h3>
        <p>Score: 1/1</p>
        <p>Ranking: Top 10%</p>
      </div>
    </div>
  );
}

const pageContainer = {
  maxWidth: '600px',
  margin: '2rem auto',
  background: '#fff',
  borderRadius: '1rem',
  padding: '2rem',
  boxShadow: '0 2px 8px rgba(139,92,246,0.08)',
  fontFamily: 'Inter, system-ui, sans-serif'
};
const headingStyle = {
  color: '#8b5cf6',
  fontWeight: 'bold',
  fontSize: '2rem',
  marginBottom: '1rem'
};
const buttonStyle = {
  background: '#6366f1',
  color: '#fff',
  border: 'none',
  borderRadius: '0.5rem',
  padding: '0.75rem 2rem',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer',
  marginBottom: '1rem'
};
const questionStyle = {
  marginBottom: '1rem'
};
const optionStyle = {
  background: '#e0e7ff',
  color: '#6366f1',
  border: 'none',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
  marginRight: '0.5rem',
  cursor: 'pointer'
};
const resultStyle = {
  marginTop: '2rem',
  background: '#f3f4f6',
  borderRadius: '0.5rem',
  padding: '1rem'
};

export default AptitudeQuiz;