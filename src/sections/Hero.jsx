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
        <div
          style={{
            position: 'relative',
            width: 'min(100%, 560px)',
            marginTop: '-1.1rem',
            marginBottom: '1.35rem',
            padding: '1rem 1.05rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            overflow: 'hidden',
            background:
              'linear-gradient(135deg, rgba(7, 7, 9, 0.98) 0%, rgba(15, 15, 19, 0.97) 52%, rgba(20, 40, 70, 0.94) 100%)',
            boxShadow:
              '0 20px 46px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(120deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 16%, rgba(255, 255, 255, 0) 34%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-4.2rem',
              right: '-2.8rem',
              width: '11rem',
              height: '11rem',
              borderRadius: '999px',
              background:
                'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(59, 130, 246, 0) 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.9rem 1rem',
            }}
          >
            <div style={{ minWidth: 0, flex: '1 1 280px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  marginBottom: '0.6rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    width: '0.45rem',
                    height: '0.45rem',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #8ec5ff, #3b82f6)',
                    boxShadow: '0 0 12px rgba(59, 130, 246, 0.45)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.74)',
                    padding: '0.26rem 0.48rem',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  New product
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.46)',
                  }}
                >
                  QR Dining
                </span>
              </div>

              <div
                style={{
                  fontSize: 'clamp(0.98rem, 1.7vw, 1.08rem)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  letterSpacing: '0.01em',
                  marginBottom: '0.28rem',
                }}
              >
                Smart contactless ordering for modern restaurants
              </div>

              <div
                style={{
                  fontSize: 'clamp(0.76rem, 1.35vw, 0.84rem)',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.72)',
                }}
              >
                Seamless menus, faster ordering, and a polished guest
                experience powered by QR Dining.
              </div>
            </div>

            <a
              href="https://qrdining.in"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.72rem',
                whiteSpace: 'nowrap',
                color: 'var(--text)',
                borderColor: 'rgba(255, 255, 255, 0.14)',
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              }}
            >
              Explore
            </a>
          </div>
        </div>
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
