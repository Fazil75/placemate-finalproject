// DepartmentRegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

function DepartmentRegisterPage() {
  const [deptName, setDeptName] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        role: "department",
        deptName,
        collegeId,
        email,
        createdAt: new Date()
      });
      alert("Department registered successfully!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Department Registration</h2>

        <input type="text" placeholder="Department Name" value={deptName} required onChange={e => setDeptName(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="College ID" value={collegeId} required onChange={e => setCollegeId(e.target.value)} style={inputStyle} />
        <input type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)} style={inputStyle} />

        <button type="submit" style={buttonStyle}>Register</button>

        <p style={{ marginTop: '1rem', color: '#6366f1' }}>
          Already have an account? <a href="/login" style={linkStyle}>Login</a>
        </p>
      </form>
    </div>
  );
}

// styles (same as login page)
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

export default DepartmentRegisterPage;
