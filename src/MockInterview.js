import React, { useState } from 'react';

function MockInterview() {
  const [started, setStarted] = useState(false);

  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>Mock Interview</h2>
      {!started ? (
        <button style={buttonStyle} onClick={() => setStarted(true)}>Start Interview</button>
      ) : (
        <div>
          <p>Interview in progress... (Webcam & Mic integration here)</p>
          <p>Facial Expression & Voice Analysis coming soon!</p>
          <button style={buttonStyle} onClick={() => setStarted(false)}>End Interview</button>
        </div>
      )}
      <div style={resultStyle}>
        <h3>Results</h3>
        <p>Confidence: 80%</p>
        <p>Speech Clarity: Good</p>
        <p>Improvement Tips: Smile more, speak slower.</p>
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
const resultStyle = {
  marginTop: '2rem',
  background: '#f3f4f6',
  borderRadius: '0.5rem',
  padding: '1rem'
};

export default MockInterview;