import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

function StaffRegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [role, setRole] = useState('placement_cell');
  const navigate = useNavigate();

  // Only allow @gmail.com or Google Workspace emails
  const isGoogleEmail = email => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email) || /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)?googlemail\.com$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isGoogleEmail(email)) {
      alert('Please use a valid Google account email address.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        role,
        email,
        name,
        collegeId,
        createdAt: new Date()
      });
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Staff Registration</h2>
        <input type="text" placeholder="Full Name" value={name} required onChange={e => setName(e.target.value)} style={inputStyle} />
        <input type="email" placeholder="Google Email" value={email} required onChange={e => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="College ID" value={collegeId} required onChange={e => setCollegeId(e.target.value)} style={inputStyle} />
        <select value={role} onChange={e => setRole(e.target.value)} style={inputStyle}>
          <option value="placement_cell">Placement Cell</option>
          <option value="career_guidance_officer">Career Guidance Officer</option>
        </select>
        <button type="submit" style={buttonStyle}>Register</button>
        <p style={{ marginTop: '1rem', color: '#6366f1' }}>
          Already have an account? <a href="/login" style={linkStyle}>Login</a>
        </p>
      </form>
    </div>
  );
}

// Style objects (same as before)
const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Inter, system-ui, sans-serif'
};
const formStyle = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '1rem',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  minWidth: '320px',
  color: '#6366f1'
};
const headingStyle = {
  marginBottom: '1.5rem',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#8b5cf6'
};
const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  fontSize: '1rem'
};
const buttonStyle = {
  background: '#8b5cf6',
  color: '#fff',
  border: 'none',
  borderRadius: '0.5rem',
  padding: '0.75rem 2rem',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer',
  marginTop: '1rem',
  width: '100%'
};
const linkStyle = {
  color: '#8b5cf6',
  fontWeight: 'bold',
  textDecoration: 'underline',
  cursor: 'pointer'
};

export default StaffRegisterPage;