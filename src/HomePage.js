import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: '#fff'
    }}>
      <nav style={{
        width: '100%',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.05)',
        position: 'fixed',
        top: 0,
        left: 0
      }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Placemate</span>
        <button
          style={{
            background: '#fff',
            color: '#8b5cf6',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.5rem 4.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </nav>
      <main style={{ marginTop: '6rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to Placemate
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Your AI-powered exam preparation platform.
        </p>
        <button
          style={{
            background: '#fff',
            color: '#6366f1',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 2rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
          onClick={() => navigate('/login')}
        >
          Get Started
        </button>
      </main>
    </div>
  );
}

export default HomePage;