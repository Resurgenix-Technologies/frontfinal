import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: '0.4rem' }}>
              ResurgenixTechnologies<span className="nav-logo-dot">.</span>
            </div>
            <p>
              Transforming traditional CCTV infrastructure into intelligent
              automation systems through advanced AI-powered computer vision
              and real-time operational analytics.
            </p>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="/#what-we-do">AI CCTV Hub</a></li>
              <li><a href="/#what-we-do">Computer Vision Analytics</a></li>
              <li><a href="/#what-we-do">Infrastructure Intelligence</a></li>
              <li><a href="/#what-we-do">Automation &amp; Monitoring</a></li>
              <li><a href="/#what-we-do">Custom AI Models</a></li>
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
              <li><a href="/#hero">About</a></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="/#consultation">Request Consultation</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Inquiries</h4>
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
