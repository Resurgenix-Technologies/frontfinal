import '../styles/whatwedo.css';

const features = [
  {
    icon: '◎',
    title: 'AI-Powered Infrastructure Intelligence',
    desc: 'Advanced computer vision models transform camera networks into intelligent sensing systems that continuously analyze environments.',
    image: '/whatwedo/ai_intelligence.jpg',
  },
  {
    icon: '⚡',
    title: 'Operational Automation Through Vision',
    desc: 'Automated workflows from CCTV feeds — attendance tracking, flow monitoring, service triggers, and alerts without additional hardware.',
    image: '/whatwedo/automation.jpg',
  },
  {
    icon: '▦',
    title: 'Smart Environment Analytics',
    desc: 'Real-time analytics on crowd density, movement patterns, occupancy levels, and activity zones for operational optimization.',
    image: '/whatwedo/analytics.jpg',
  },
  {
    icon: '◉',
    title: 'Safety & Risk Monitoring',
    desc: 'Continuous monitoring for anomalies, unsafe behavior, and threats. AI-driven detection enables faster incident response.',
    image: '/whatwedo/safety.jpg',
  },
  {
    icon: '⬡',
    title: 'Scalable AI CCTV Hub',
    desc: 'Seamless integration with existing surveillance infrastructure. Deploy intelligent automation across businesses to enterprise campuses.',
    image: '/whatwedo/scalable.jpg',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="reveal">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">
          Intelligent Infrastructure,<br />Powered by Vision AI
        </h2>
        <p className="section-desc">
          We convert existing CCTV infrastructure into an intelligent automation
          platform that helps organizations monitor environments, automate
          operations, and generate actionable insights.
        </p>
      </div>
      <div className="whatwedo-grid">
        {features.map((f, i) => (
          <div className="whatwedo-card reveal" key={i}>
            <div className="whatwedo-card-line"></div>
            <div className="whatwedo-img">
              <img src={f.image} alt={f.title} />
              <div className="whatwedo-img-overlay"></div>
            </div>
            <div className="whatwedo-body">
              <div className="whatwedo-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
