import '../styles/hero.css';

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content reveal">
        <span className="section-label">ResurgenixTechnologies</span>
        <h1 className="hero-headline">
          Transforming CCTV Infrastructure into Intelligent Automation Systems.
        </h1>
        <p className="hero-sub">
          Through advanced AI-powered computer vision, our solutions enable
          organizations to automate and optimize everyday processes using
          existing camera networks — from restaurants and offices to hospitals
          and campuses.
        </p>
        <div className="hero-cta-group">
          <a href="#consultation" className="btn btn-primary">
            Request a Consultation
          </a>
          <a href="#what-we-do" className="btn btn-outline">
            Learn More ↓
          </a>
        </div>
      </div>

      {/* Decorative CCTV camera SVG */}
      <svg className="hero-cctv-badge" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="#fff" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="#fff" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="40" stroke="#fff" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="#fff" strokeWidth="0.2" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="#fff" strokeWidth="0.2" />
        <circle cx="100" cy="100" r="5" fill="#fff" opacity="0.5" />
      </svg>
    </section>
  );
}
