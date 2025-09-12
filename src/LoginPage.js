import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'staff') {
        navigate('/placement-dashboard');
      } else if (role === 'department') {
        navigate('/department-dashboard'); // route for department
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleLogin} style={formStyle}>
        <h2 style={headingStyle}>Login</h2>

        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          style={inputStyle}
        >
          <option value="student">Student</option>
          <option value="staff">Placement Cell/Staff</option>
          <option value="department">Department</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Login</button>

        <p style={{ marginTop: '1rem', color: '#6366f1' }}>
          Don't have an account?{' '}
          {role === 'student' ? (
            <a href="/register-student" style={linkStyle}>Register as Student</a>
          ) : role === 'staff' ? (
            <a href="/register-staff" style={linkStyle}>Register as Staff</a>
          ) : (
            <a href="/register-department" style={linkStyle}>Register as Department</a>
          )}
        </p>

        <p>
          <span
            style={linkStyle}
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </span>
        </p>
      </form>
    </div>
  );
}

// Styles
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

export default LoginPage;
