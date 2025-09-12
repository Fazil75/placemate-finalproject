import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlacementDashboard() {
  const navigate = useNavigate();

  // Dummy profile info for Placement Cell staff
  const profile = {
    name: "Placement Officer",
    department: "Training & Placement Cell",
    email: "placementcell@college.com"
  };

  return (
    <div style={dashboardContainer}>
      <header style={bannerStyle}>
        <h1>Welcome, {profile.name}!</h1>
        <p>{profile.department}</p>
        <p>{profile.email}</p>
      </header>

      <nav style={navStyle}>
        <button style={navButton} onClick={() => navigate('/jobs')}>
          Job Postings
        </button>
        <button style={navButton} onClick={() => navigate('/eligibility')}>
          Eligibility Setup
        </button>
        <button style={navButton} onClick={() => navigate('/shortlisting')}>
          Student Shortlisting
        </button>
        <button style={navButton} onClick={() => navigate('/resume-filter')}>
          Resume Filter
        </button>
        <button style={navButton} onClick={() => navigate('/ranking')}>
          Placement Ranking
        </button>
        <button style={navButton} onClick={() => navigate('/reports')}>
          Reports
        </button>
      </nav>

      <section style={notifSection}>
        <h2>Notifications & Updates</h2>
        <ul>
          <li>3 new companies registered for placement drive.</li>
          <li>Eligibility criteria updated for Software Engineer role.</li>
          <li>Report submission deadline: 15th September.</li>
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
  flexWrap: 'wrap',
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

export default PlacementDashboard;
