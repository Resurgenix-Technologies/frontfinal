import { useEffect } from 'react';
import '../styles/reviews.css';

const reviews = [
  {
    name: 'Sourav Chatterjee',
    role: 'Operations Head, Park Street Café',
    initials: 'SC',
    stars: 5,
    text: 'ResurgenixTechnologies transformed our café security system into a full operational intelligence platform. We now track customer flow, peak hours, and staff efficiency — all from our existing cameras. Truly impressive.',
  },
  {
    name: 'Ananya Mukherjee',
    role: 'Principal, DPS Newtown Campus',
    initials: 'AM',
    stars: 5,
    text: 'The automated attendance and campus monitoring solution has been a game-changer for our school. Parents love the added safety layer, and administration saves hours every day.',
  },
  {
    name: 'Debashis Roy',
    role: 'Facility Manager, DLF IT Park',
    initials: 'DR',
    stars: 5,
    text: 'Their AI-powered CCTV hub gave us real-time insights into building occupancy and movement patterns. The integration with our existing infrastructure was seamless.',
  },
  {
    name: 'Priya Sen',
    role: 'COO, Medica Superspecialty Hospital',
    initials: 'PS',
    stars: 4,
    text: 'Patient flow monitoring and corridor safety alerts have significantly improved our hospital operations. The system paid for itself within the first quarter.',
  },
  {
    name: 'Rajesh Dasgupta',
    role: 'Owner, Mani Square Retail',
    initials: 'RD',
    stars: 5,
    text: 'Heat-mapping and dwell-time analytics from our CCTV feeds helped us restructure store layouts. Customer engagement went up by 30% in two months.',
  },
  {
    name: 'Tanushree Banerjee',
    role: 'HR Director, TCS Salt Lake Office',
    initials: 'TB',
    stars: 5,
    text: 'Attendance automation and workspace utilization insights have made our operations incredibly efficient. The team at Resurgenix truly understands enterprise needs.',
  },
  {
    name: 'Arnab Ghosh',
    role: 'Plant Supervisor, Haldia Industrial Zone',
    initials: 'AG',
    stars: 4,
    text: 'Real-time safety compliance monitoring in our factory floor has reduced incidents by 40%. The restricted zone alerts are spot-on and reliable.',
  },
  {
    name: 'Ishita Bose',
    role: 'Managing Director, Quest Mall',
    initials: 'IB',
    stars: 5,
    text: 'The smart building analytics transformed how we manage our property. From washroom occupancy to escalator usage — everything is now data-driven.',
  },
];

export default function Reviews() {
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

  return (
    <>
      <div className="reviews-hero reveal">
        <span className="section-label">Client Stories</span>
        <h1>What Our Clients Say</h1>
        <p>
          Real experiences from organizations across Kolkata who've transformed
          their surveillance infrastructure with ResurgenixTechnologies.
        </p>
        <div className="reviews-stats">
          <div className="reviews-stat">
            <h3>50+</h3>
            <p>Active Deployments</p>
          </div>
          <div className="reviews-stat">
            <h3>4.8★</h3>
            <p>Average Rating</p>
          </div>
          <div className="reviews-stat">
            <h3>98%</h3>
            <p>Client Retention</p>
          </div>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card reveal" key={i}>
            <div className="review-quote">"</div>
            <div className="review-stars">
              {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
            </div>
            <div className="review-text">{r.text}</div>
            <div className="review-author">
              <div className="review-avatar">{r.initials}</div>
              <div>
                <div className="review-author-name">{r.name}</div>
                <div className="review-author-role">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
