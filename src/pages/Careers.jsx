import { useEffect, useState } from 'react';
import { submitToSheet } from '../config/sheets';
import '../styles/careers.css';
import '../styles/founders.css';
import Toast from '../components/Toast';

const founders = [
  {
    name: 'Souryodipto Debnath',
    role: 'Founder & CEO',
    bio: 'Driving the vision behind AI-powered infrastructure intelligence and leading product strategy.',
    image: '/founders/founder1.jpg',
  },
  {
    name: 'Avijit Bhadra',
    role: 'Co-Founder & CTO',
    bio: 'Architecting scalable computer vision systems and leading engineering innovation.',
    image: '/founders/founder2.png',
  },
];

const positions = [
  { title: 'Computer Vision Engineer', type: 'Full-time', location: 'Kolkata / Remote', dept: 'Engineering' },
  { title: 'Full Stack Developer', type: 'Full-time', location: 'Kolkata', dept: 'Engineering' },
  { title: 'AI/ML Research Intern', type: 'Internship', location: 'Remote', dept: 'Research' },
  { title: 'Business Development Executive', type: 'Full-time', location: 'Kolkata', dept: 'Business' },
  { title: 'Product Designer', type: 'Full-time', location: 'Remote', dept: 'Design' },
];

export default function Careers() {
  const [toast, setToast] = useState({ visible: false, message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    // Remove file field (can't send via JSON — just send metadata)
    delete obj.resume;
    await submitToSheet('career', obj);
    setToast({ visible: true, message: 'Application submitted! We\u2019ll review it shortly.' });
    setTimeout(() => setToast({ visible: false, message: '' }), 3500);
    e.target.reset();
  };

  return (
    <>
      {/* Hero */}
      <div className="careers-hero reveal">
        <span className="section-label">Join Our Team</span>
        <h1>Build the Future of Intelligent Infrastructure</h1>
        <p>
          We're looking for passionate engineers, designers, and thinkers who
          want to transform how organizations use visual data. Join
          ResurgenixTechnologies and help build AI systems that make environments
          smarter and safer.
        </p>
      </div>

      {/* Founders Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="reveal">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Meet the Founders</h2>
          <p className="section-desc">
            The minds behind ResurgenixTechnologies — building intelligent
            infrastructure for the future.
          </p>
        </div>
        <div className="founders-grid">
          {founders.map((f, i) => (
            <div className="founder-card reveal" key={i}>
              <div className="founder-img-wrapper">
                <img src={f.image} alt={f.name} />
              </div>
              <div className="founder-name">{f.name}</div>
              <div className="founder-role">{f.role}</div>
              <div className="founder-bio">{f.bio}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <div className="careers-positions">
        <h2 className="reveal">Open Positions</h2>
        <div className="position-list">
          {positions.map((p, i) => (
            <div className="position-card reveal" key={i}>
              <div className="position-info">
                <h3>{p.title}</h3>
                <div className="position-meta">
                  <span>{p.type}</span>
                  <span>{p.location}</span>
                  <span>{p.dept}</span>
                </div>
              </div>
              <button
                className="position-apply"
                onClick={() => {
                  document.getElementById('careers-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Apply →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Single Apply Form */}
      <div className="careers-form-section" id="careers-form">
        <h2 className="reveal">Apply Now</h2>
        <p className="reveal">Send us your details and we'll get back to you.</p>
        <form className="careers-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input className="form-input" name="name" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input className="form-input" name="email" type="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input className="form-input" name="phone" type="tel" />
            </div>
            <div className="form-group">
              <label>Position Applying For</label>
              <select className="form-input" name="position">
                <option value="">Select position…</option>
                {positions.map((p, i) => (
                  <option key={i} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Resume / CV</label>
            <div className="file-input-wrapper">
              <input type="file" name="resume" accept=".pdf,.doc,.docx" />
              <div className="file-input-label">📎 Upload your resume (PDF, DOC)</div>
            </div>
          </div>
          <div className="form-group">
            <label>Cover Letter / Message</label>
            <textarea className="form-input" name="coverLetter" placeholder="Tell us why you're interested and what you bring…"></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Submit Application →</button>
        </form>
      </div>

      <div className="careers-cctv-watermark">SYS:CAREERS &nbsp;|&nbsp; RESURGENIX-AI</div>
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
