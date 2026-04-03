import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Return to our homepage to explore Resurgenix Technologies AI-powered CCTV automation solutions."
        noindex={true}
      />
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 2rem',
          fontFamily: 'var(--font)',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(5rem, 12vw, 8rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 600,
            color: 'var(--text)',
            marginBottom: '0.8rem',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            maxWidth: '460px',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
          <Link to="/#contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
