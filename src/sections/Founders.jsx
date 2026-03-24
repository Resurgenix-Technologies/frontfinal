import '../styles/founders.css';

const founders = [
  {
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Driving the vision behind AI-powered infrastructure intelligence and leading product strategy.',
    image: '/founders/founder1.png',
  },
  {
    name: 'Rohan Das',
    role: 'Co-Founder & CTO',
    bio: 'Architecting scalable computer vision systems and leading engineering innovation.',
    image: '/founders/founder2.png',
  },
];

export default function Founders() {
  return (
    <section id="founders" className="section">
      <div className="reveal">
        <span className="section-label">Leadership</span>
        <h2 className="section-title">Meet the Founders</h2>
        <p className="section-desc">
          The minds behind Resurgenic Technologies — building intelligent
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
  );
}
