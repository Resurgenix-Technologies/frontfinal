import { submitToSheet } from '../config/sheets';
import '../styles/contact.css';

export default function Contact({ onToast }) {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyy95knr1RmN4qPOdDJV7YU82ZtnHGaaNZArszwQD3ccDlP5nFFwaUmiVilJkKJ7tMIbw/exec";

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);

  const payload = {
    id: `contact_${Date.now()}`,
    name: obj.name,
    email: obj.email,
    phone: obj.phone || '',
    interest: 'contact_form',
    message: obj.message || '',
    submittedAt: new Date().toISOString()
  };

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload)
    });

    onToast && onToast("Message sent! We’ll respond within 24 hours.");
    e.target.reset();

  } catch (err) {
    console.error(err);
    onToast && onToast("Failed to send message");
  }
};

  return (
    <section id="contact" className="section contact-section">
      <div className="reveal">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-desc">
          Questions about AI-powered CCTV automation? Our team is ready to help
          you explore intelligent infrastructure solutions.
        </p>
      </div>
      <div className="contact-grid reveal">
        <div className="contact-info-list">
          <div className="contact-item">
            <div className="contact-item-icon">✉</div>
            <div>
              <div className="contact-item-label">Email</div>
              <div className="contact-item-value">
                <a href="mailto:info@resurgenix.com">info@resurgenix.com</a>
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">☎</div>
            <div>
              <div className="contact-item-label">Phone / WhatsApp</div>
              <div className="contact-item-value">
                <a href="https://wa.me/919064731358" target="_blank" rel="noopener noreferrer">
                  +91 9064731358
                </a>
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">◉</div>
            <div>
              <div className="contact-item-label">Location</div>
              <div className="contact-item-value">Kolkata, India</div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input className="form-input" name="name" placeholder="Your Name" required />
          <input className="form-input" name="email" type="email" placeholder="Your Email" required />
          <input className="form-input" name="phone" type="tel" placeholder="Phone Number" />
          <textarea className="form-input" name="message" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
