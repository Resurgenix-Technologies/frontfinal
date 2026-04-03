import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/legal.css';

export default function PrivacyPolicy() {
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
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy of Resurgenix Technologies Pvt. Ltd. Learn how we collect, use, and protect your personal information."
        path="/privacy-policy"
      />

      <div className="legal-page">
        <nav className="breadcrumb reveal" aria-label="Breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span>Privacy Policy</span>
        </nav>

        <div className="legal-content reveal">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: April 4, 2026</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Resurgenix Technologies Pvt. Ltd. ("Resurgenix," "we," "our," or "us")
              is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit
              our website <a href="https://www.resurgenixtechnologies.com">www.resurgenixtechnologies.com</a> or
              use our services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personally identifiable information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact details (email address, phone number)</li>
              <li>Company/organization name and job title</li>
              <li>Information submitted through consultation request forms</li>
              <li>Resume/CV data submitted through career applications</li>
              <li>Messages sent through our contact forms</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Responding to your inquiries and consultation requests</li>
              <li>Processing career applications</li>
              <li>Improving our website and services</li>
              <li>Sending relevant communications (with your consent)</li>
              <li>Analyzing website usage patterns to enhance user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Storage & Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information. Form submissions are securely processed and stored.
              Our website uses HTTPS encryption for all data transmission.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>We may use third-party services including:</p>
            <ul>
              <li><strong>Cloudflare</strong> — for website hosting, CDN, and security</li>
              <li><strong>Google Sheets / Apps Script</strong> — for secure form data processing</li>
              <li><strong>Cloudflare Web Analytics</strong> — privacy-focused website analytics</li>
            </ul>
            <p>
              These services have their own privacy policies. We encourage you to
              review them.
            </p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Our website uses minimal cookies necessary for functionality. We do not
              use third-party advertising cookies or extensive tracking cookies. Session
              storage may be used to enhance your browsing experience.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for the purposes
              outlined in this policy or as required by applicable law. Career applications
              are retained for a maximum of 12 months unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do
              not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated revision date. We encourage you to
              review this page periodically.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:info@resurgenix.com">info@resurgenix.com</a></li>
              <li>Phone: <a href="https://wa.me/919064731358">+91 9064731358</a></li>
              <li>Location: Kolkata, India</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
