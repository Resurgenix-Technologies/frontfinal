import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/legal.css';

export default function TermsOfService() {
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
        title="Terms of Service"
        description="Read the Terms of Service for Resurgenix Technologies Pvt. Ltd. Understand the terms governing your use of our website and AI-powered CCTV automation services."
        path="/terms-of-service"
      />

      <div className="legal-page">
        <nav className="breadcrumb reveal" aria-label="Breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span>Terms of Service</span>
        </nav>

        <div className="legal-content reveal">
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: April 4, 2026</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of Resurgenix Technologies Pvt. Ltd.
              ("Resurgenix," "we," "our") at <a href="https://www.resurgenixtechnologies.com">www.resurgenixtechnologies.com</a>,
              you agree to comply with and be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2>2. Description of Services</h2>
            <p>
              Resurgenix Technologies provides AI-powered CCTV automation and computer
              vision solutions. Our services include but are not limited to:
            </p>
            <ul>
              <li>AI CCTV Hub — intelligent video analytics platform</li>
              <li>Computer Vision Analytics — real-time movement and behavior analysis</li>
              <li>Infrastructure Intelligence — smart environment monitoring</li>
              <li>Automation & Monitoring — automated attendance and access control</li>
              <li>Custom AI Models — bespoke computer vision solutions</li>
              <li>QR Dining — contactless ordering platform</li>
            </ul>
          </section>

          <section>
            <h2>3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes. You shall not:</p>
            <ul>
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use automated tools to scrape, crawl (beyond reasonable indexing), or extract data</li>
              <li>Introduce malicious software or interfere with the website's operation</li>
              <li>Impersonate Resurgenix Technologies or its representatives</li>
            </ul>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images,
              software, and technology — is the property of Resurgenix Technologies
              Pvt. Ltd. and is protected by applicable intellectual property laws. You
              may not reproduce, distribute, or create derivative works without our
              express written consent.
            </p>
          </section>

          <section>
            <h2>5. Consultation Requests & Submissions</h2>
            <p>
              By submitting a consultation request, contact form, or career application,
              you confirm that the information provided is accurate. We will process
              your submissions in accordance with our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided "as is" without warranties
              of any kind, either express or implied. Resurgenix Technologies does not
              warrant that the website will be uninterrupted, error-free, or free of
              viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Resurgenix Technologies shall
              not be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of or inability to use our website
              or services.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content, privacy policies, or practices of any
              third-party sites. We encourage you to review the terms of any
              third-party website you visit.
            </p>
          </section>

          <section>
            <h2>9. Modifications</h2>
            <p>
              Resurgenix Technologies reserves the right to modify these Terms of
              Service at any time. Changes will be effective immediately upon posting
              on this page. Continued use of the website after changes constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with
              the laws of India. Any disputes arising from these terms shall be subject
              to the exclusive jurisdiction of the courts in Kolkata, West Bengal, India.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
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
