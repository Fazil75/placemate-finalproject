import React, { useState } from 'react';
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif', background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' }}>
      <form onSubmit={handleReset} style={{ background: '#fff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', minWidth: '320px', color: '#6366f1' }}>
        <h2 style={{ marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: '#8b5cf6' }}>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '1rem' }}
        />
        <button type="submit" style={{ background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 2rem', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', marginTop: '1rem', width: '100%' }}>
          Send Reset Link
        </button>
        {message && <p style={{ marginTop: '1rem', color: '#6366f1' }}>{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPasswordPage;