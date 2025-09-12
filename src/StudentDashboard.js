import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();

  // Dummy profile info
  const profile = {
    name: "Student Name",
    department: "Computer Science",
    year: "3rd Year",
    email: "student@gmail.com"
  };

  return (
    <div style={dashboardContainer}>
      <header style={bannerStyle}>
        <h1>Welcome, {profile.name}!</h1>
        <p>{profile.department} | {profile.year}</p>
        <p>{profile.email}</p>
      </header>
      <nav style={navStyle}>
        <button style={navButton} onClick={() => navigate('/resume-builder')}>Resume Builder</button>
        <button style={navButton} onClick={() => navigate('/mock-interview')}>Mock Interview</button>
        <button style={navButton} onClick={() => navigate('/aptitude-quiz')}>Aptitude & Quiz</button>
       <button style={navButton} onClick={() => navigate('/career-guidance-dashboard')}>Career Guidance</button>
         

      </nav>
      <section style={notifSection}>
        <h2>Notifications & Reminders</h2>
        <ul>
          <li>New job posted: Software Engineer at ABC Corp</li>
          <li>Upcoming exam: Aptitude Test on Friday</li>
          <li>Internship deadline: XYZ Ltd - 10th Sep</li>
        </ul>
      </section>
    </div>
  );
}

const dashboardContainer = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)',
  fontFamily: 'Inter, system-ui, sans-serif',
  padding: '2rem'
};
const bannerStyle = {
  background: '#8b5cf6',
  color: '#fff',
  borderRadius: '1rem',
  padding: '2rem',
  marginBottom: '2rem',
  boxShadow: '0 4px 24px rgba(139,92,246,0.08)'
};
const navStyle = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
  justifyContent: 'center'
};
const navButton = {
  background: '#6366f1',
  color: '#fff',
  border: 'none',
  borderRadius: '0.5rem',
  padding: '1rem 2rem',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(139,92,246,0.08)'
};
const notifSection = {
  background: '#fff',
  borderRadius: '1rem',
  padding: '1.5rem',
  boxShadow: '0 2px 8px rgba(139,92,246,0.08)'
};

export default StudentDashboard;