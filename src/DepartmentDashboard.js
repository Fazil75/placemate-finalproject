import React from 'react';
import { useNavigate } from 'react-router-dom';

function DepartmentDashboard() {
  const navigate = useNavigate();

  return (
    <div style={dashboardContainer}>
      <header style={bannerStyle}>
        <h1>Welcome, Department!</h1>
        <p>Manage students and oversee placement activities</p>
      </header>

      <nav style={navStyle}>
        <button 
          style={navButton} 
          onClick={() => navigate('/manage-students')}
        >
          👨‍🎓 Manage Students
        </button>
        <button 
          style={navButton} 
          onClick={() => navigate('/placement-readiness')}
        >
          📊 Track Placement Readiness
        </button>
        <button 
          style={navButton} 
          onClick={() => navigate('/department-notices')}
        >
          📢 Share Department Notices
        </button>
      </nav>
    </div>
  );
}

// Styles (matching StudentDashboard)
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
  boxShadow: '0 4px 24px rgba(139,92,246,0.08)',
  textAlign: 'center'
};
const navStyle = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
  justifyContent: 'center',
  flexWrap: 'wrap'
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
  boxShadow: '0 2px 8px rgba(139,92,246,0.08)',
  transition: 'background 0.2s ease'
};

export default DepartmentDashboard;
