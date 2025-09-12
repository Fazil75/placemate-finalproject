import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        phone,
        address,
        createdAt: new Date()
      });
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          minWidth: '320px',
          color: '#6366f1'
        }}
      >
        <h2 style={{ marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: '#8b5cf6' }}>Register</h2>
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
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          required
          onChange={e => setPhone(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          required
          onChange={e => setAddress(e.target.value)}
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
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
          }}
        >
          Register
        </button>
        <p style={{ marginTop: '1rem', color: '#6366f1' }}>
          Already have an account? <a href="/login" style={{ color: '#8b5cf6', fontWeight: 'bold' }}>Login</a>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  fontSize: '1rem'
};

export default RegisterPage;