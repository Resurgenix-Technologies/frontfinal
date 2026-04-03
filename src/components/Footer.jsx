import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: '0.4rem' }}>
              ResurgenixTechnologies<span className="nav-logo-dot">.</span>
            </div>
            <p>
              Transforming traditional CCTV infrastructure into intelligent
              automation systems through advanced AI-powered computer vision,
              industry automation workflows, and QR dining solutions.
            </p>
            <div className="footer-contact-info" style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.82rem', color: '#aaa', lineHeight: 1.8 }}>
                <strong style={{ color: '#ccc' }}>Email:</strong>{' '}
                <a href="mailto:info@resurgenix.com" style={{ color: '#3b82f6' }}>info@resurgenix.com</a>
              </p>
              <p style={{ fontSize: '0.82rem', color: '#aaa', lineHeight: 1.8 }}>
                <strong style={{ color: '#ccc' }}>Phone:</strong>{' '}
                <a href="https://wa.me/919064731358" style={{ color: '#3b82f6' }}>+91 9064731358</a>
              </p>
              <p style={{ fontSize: '0.82rem', color: '#aaa', lineHeight: 1.8 }}>
                <strong style={{ color: '#ccc' }}>Location:</strong> Kolkata, India
              </p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="/#what-we-do">AI CCTV Hub</a></li>
              <li><Link to="/cctv-automation-guide">CCTV Automation Guide</Link></li>
              <li><Link to="/automating-industries">Automating Industries</Link></li>
              <li><Link to="/qr-dining-solutions">QR Dining Solutions</Link></li>
              <li><Link to="/blog">Industry Automation Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/#services">Cafés &amp; Restaurants</a></li>
              <li><a href="/#services">Retail Stores</a></li>
              <li><a href="/#services">Corporate Offices</a></li>
              <li><a href="/#services">Schools &amp; Campuses</a></li>
              <li><a href="/#services">Hospitals &amp; Healthcare</a></li>
              <li><a href="/#services">Industrial Facilities</a></li>
              <li><a href="/#services">Smart Buildings</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="/#consultation">Request Consultation</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
            <h4 style={{ marginTop: '1.2rem' }}>Inquiries</h4>
            <ul>
              <li><a href="/#contact">Direct Contact</a></li>
              <li><a href="/#contact">Partnership</a></li>
              <li><a href="/#contact">Investor Relations</a></li>
              <li><a href="/#contact">Media &amp; Press</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Resurgenix Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Building AI-powered infrastructure for intelligent environments.</p>
        </div>
      </div>
    </footer>
  );
}
