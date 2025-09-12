import React, { useState } from 'react';

function ResumeBuilder() {
  const [resume, setResume] = useState('');
  const [feedback, setFeedback] = useState('');

  // Dummy feedback logic
  const handleResumeChange = (e) => {
    setResume(e.target.value);
    setFeedback('Grammar looks good. Add more skills for better impact.');
  };

  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>AI Resume Builder</h2>
      <textarea
        value={resume}
        onChange={handleResumeChange}
        placeholder="Paste or write your resume here..."
        style={textareaStyle}
      />
      <div style={feedbackStyle}>{feedback}</div>
      <button style={buttonStyle}>Upload Resume (NLP Parse)</button>
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
const textareaStyle = {
  width: '100%',
  height: '200px',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  padding: '1rem',
  fontSize: '1rem',
  marginBottom: '1rem'
};
const feedbackStyle = {
  color: '#6366f1',
  marginBottom: '1rem'
};
const buttonStyle = {
  background: '#8b5cf6',
  color: '#fff',
  border: 'none',
  borderRadius: '0.5rem',
  padding: '0.75rem 2rem',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer'
};

export default ResumeBuilder;