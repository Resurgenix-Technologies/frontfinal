import { useEffect, useState, useRef } from 'react';
import '../styles/intro.css';

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    // Check sessionStorage — only play once per session
    if (sessionStorage.getItem('introPlayed')) {
      setPhase('done');
      if (onComplete) onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase('open'), 500);
    const t2 = setTimeout(() => setPhase('zoom'), 1600);
    const t3 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('introPlayed', '1');
      if (onComplete) onComplete();
    }, 2400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  // If already played, render nothing
  if (phase === 'done' && sessionStorage.getItem('introPlayed')) {
    return null;
  }

  const bladeStyle = (angle, dist) => {
    if (phase === 'open' || phase === 'zoom' || phase === 'done') {
      return { transform: `rotate(${angle}deg) translate(${dist}px)`, opacity: 0 };
    }
    return {};
  };

  return (
    <div
      id="intro-overlay"
      className={phase === 'done' ? 'done' : ''}
      style={phase === 'done' ? { opacity: 0, pointerEvents: 'none' } : {}}
    >
      <div className="intro-rec">
        <span className="intro-rec-dot"></span>
        REC
      </div>

      <div className={`intro-lens-wrapper ${phase === 'zoom' ? 'zoom' : ''}`}>
        <div className="lens-ring"></div>
        <div className="lens-ring-inner"></div>
        <div className="intro-scanline"></div>

        <svg className="iris-svg" viewBox="0 0 200 200">
          <polygon className="iris-blade" style={bladeStyle(60, 90)} points="100,100 70,40 130,40" />
          <polygon className="iris-blade" style={bladeStyle(120, 90)} points="100,100 130,40 160,100" />
          <polygon className="iris-blade" style={bladeStyle(180, 90)} points="100,100 160,100 130,160" />
          <polygon className="iris-blade" style={bladeStyle(240, 90)} points="100,100 130,160 70,160" />
          <polygon className="iris-blade" style={bladeStyle(300, 90)} points="100,100 70,160 40,100" />
          <polygon className="iris-blade" style={bladeStyle(360, 90)} points="100,100 40,100 70,40" />
        </svg>
      </div>

      <p className="intro-text">Initializing Vision System</p>
      <div className="intro-timestamp">CAM-01 &nbsp;|&nbsp; {new Date().toLocaleTimeString()}</div>
    </div>
  );
}
