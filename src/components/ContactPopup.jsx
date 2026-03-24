import { useState, useEffect } from 'react';
import { submitToSheet } from '../config/sheets';

const popupStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  width: '320px',
  background: '#111',
  border: '1px solid #1a1a1a',
  borderRadius: '10px',
  padding: '1.5rem',
  zIndex: 999,
  transform: 'translateY(120%)',
  opacity: 0,
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  fontFamily: 'var(--font)',
};

const popupVisibleStyle = {
  ...popupStyle,
  transform: 'translateY(0)',
  opacity: 1,
};

const closeStyle = {
  position: 'absolute',
  top: '10px',
  right: '12px',
  background: 'none',
  border: 'none',
  color: '#555',
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '4px',
  lineHeight: 1,
  transition: 'color 0.3s',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem 0.7rem',
  background: '#0a0a0a',
  border: '1px solid #1a1a1a',
  borderRadius: '5px',
  color: '#f5f5f5',
  fontSize: '0.82rem',
  outline: 'none',
  fontFamily: 'inherit',
  marginBottom: '0.5rem',
  transition: 'border-color 0.3s',
};

const btnStyle = {
  width: '100%',
  padding: '0.55rem',
  background: '#f5f5f5',
  color: '#0a0a0a',
  border: 'none',
  borderRadius: '5px',
  fontSize: '0.82rem',
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'inherit',
  letterSpacing: '0.3px',
  transition: 'all 0.3s',
  marginTop: '0.3rem',
};

export default function ContactPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const showPopup = () => {
      if (!dismissed && !submitted) setVisible(true);
    };
    const timer = setTimeout(showPopup, 7000);
    const interval = setInterval(showPopup, 7000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, [dismissed, submitted]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    setTimeout(() => setDismissed(false), 7000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    await submitToSheet('contactPopup', obj);
    setSubmitted(true);
    setVisible(false);
  };

  if (submitted) return null;

  return (
    <div style={visible ? popupVisibleStyle : popupStyle}>
      <button
        style={closeStyle}
        onClick={handleClose}
        onMouseEnter={(e) => e.target.style.color = '#fff'}
        onMouseLeave={(e) => e.target.style.color = '#555'}
        aria-label="Close"
      >✕</button>
      <div style={{ fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '0.5rem' }}>Quick Connect</div>
      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f5f5f5', marginBottom: '0.2rem' }}>Get in Touch</div>
      <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '1rem', lineHeight: 1.5 }}>Drop your details and we'll reach out within 24 hours.</div>
      <form onSubmit={handleSubmit}>
        <input style={inputStyle} name="name" placeholder="Your Name" required onFocus={(e) => e.target.style.borderColor = '#3b82f6'} onBlur={(e) => e.target.style.borderColor = '#1a1a1a'} />
        <input style={inputStyle} name="email" type="email" placeholder="Email Address" required onFocus={(e) => e.target.style.borderColor = '#3b82f6'} onBlur={(e) => e.target.style.borderColor = '#1a1a1a'} />
        <input style={inputStyle} name="phone" placeholder="Phone (optional)" onFocus={(e) => e.target.style.borderColor = '#3b82f6'} onBlur={(e) => e.target.style.borderColor = '#1a1a1a'} />
        <button type="submit" style={btnStyle}
          onMouseEnter={(e) => { e.target.style.background = '#3b82f6'; e.target.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.target.style.background = '#f5f5f5'; e.target.style.color = '#0a0a0a'; }}
        >Send →</button>
      </form>
    </div>
  );
}
