import '../styles/services.css';

const services = [
  { icon: '☕', title: 'Cafés & Restaurants', desc: 'Automated customer recognition, smart queue monitoring, occupancy insights, and service efficiency analysis.', image: '/services/cafe.png' },
  { icon: '🛍️', title: 'Retail Stores & Shopping', desc: 'Foot traffic analysis, customer dwell time mapping, and high-interest zone detection.', image: '/services/retail.png' },
  { icon: '🏢', title: 'Offices & Corporate', desc: 'Automated access monitoring, attendance insights, and space utilization analytics.', image: '/services/office.png' },
  { icon: '🎓', title: 'Schools & Campuses', desc: 'Automated attendance verification, crowd monitoring, and enhanced campus safety.', image: '/services/school.png' },
  { icon: '🏥', title: 'Hospitals & Healthcare', desc: 'Patient flow insights, operational monitoring, and safety surveillance.', image: '/services/hospital.png' },
  { icon: '🏭', title: 'Factories & Industrial', desc: 'Safety compliance, restricted zone monitoring, and real-time alerts for unsafe activities.', image: '/services/factory.png' },
  { icon: '🏙️', title: 'Smart Buildings', desc: 'Occupancy monitoring, movement analytics, and automated facility management.', image: '/services/building.png' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="reveal">
        <span className="section-label">Industries We Serve</span>
        <h2 className="section-title">Intelligent Solutions for Every Environment</h2>
        <p className="section-desc">
          From hospitality to healthcare, our AI-powered CCTV platform adapts
          to diverse operational needs.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card reveal" key={i}>
            <div className="service-card-accent"></div>
            <div className="service-img">
              <img src={s.image} alt={s.title} />
              <div className="service-img-overlay"></div>
            </div>
            <div className="service-body">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
