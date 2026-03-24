import { useState } from 'react';
import { submitToSheet } from '../config/sheets';
import '../styles/consultation.css';

export default function Consultation({ onToast }) {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const prev = form[name] || [];
      setForm({
        ...form,
        [name]: checked ? [...prev, value] : prev.filter(v => v !== value),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Flatten checkbox arrays to comma-separated strings for sheets
    const payload = {};
    for (const [key, val] of Object.entries(form)) {
      payload[key] = Array.isArray(val) ? val.join(', ') : val;
    }
    await submitToSheet('consultation', payload);
    if (onToast) onToast('Thank you! We\u2019ll be in touch shortly.');
    setForm({});
    e.target.reset();
  };

  return (
    <section id="consultation" className="section">
      <div className="consultation-intro reveal">
        <span className="section-label">Start a Pilot Project</span>
        <h2 className="section-title">Request a Consultation</h2>
        <p className="section-desc">
          Experience how ResurgenixTechnologies transforms traditional CCTV
          infrastructure into an intelligent automation platform.
        </p>
      </div>

      <form className="form-container reveal" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-section-title">Contact Information</div>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input className="form-input" name="fullName" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Company / Organization</label>
              <input className="form-input" name="company" onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Work Email *</label>
              <input className="form-input" name="workEmail" type="email" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input className="form-input" name="phone" type="tel" onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Job Title / Role</label>
              <input className="form-input" name="jobTitle" onChange={handleChange} />
            </div>
            <div className="form-group"></div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">Organization Details</div>
          <div className="form-row">
            <div className="form-group">
              <label>Industry Type</label>
              <select className="form-input" name="industry" onChange={handleChange}>
                <option value="">Select industry…</option>
                <option>Café / Restaurant</option>
                <option>Retail</option>
                <option>Office / Corporate</option>
                <option>School / College</option>
                <option>Hospital</option>
                <option>Industrial / Factory</option>
                <option>Smart Building / Campus</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Business Location</label>
              <input className="form-input" name="location" placeholder="City / Country" onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Number of Locations</label>
              <select className="form-input" name="numLocations" onChange={handleChange}>
                <option value="">Select…</option>
                <option>Single</option>
                <option>Multiple</option>
              </select>
            </div>
            <div className="form-group"></div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">Infrastructure Details</div>
          <div className="form-row">
            <div className="form-group">
              <label>Existing CCTV System</label>
              <select className="form-input" name="existingCctv" onChange={handleChange}>
                <option value="">Select…</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of Cameras</label>
              <select className="form-input" name="numCameras" onChange={handleChange}>
                <option value="">Select…</option>
                <option>1–5</option>
                <option>5–20</option>
                <option>20–50</option>
                <option>50+</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>CCTV Type</label>
              <select className="form-input" name="cctvType" onChange={handleChange}>
                <option value="">Select…</option>
                <option>IP Cameras</option>
                <option>Analog / DVR</option>
                <option>Mixed Setup</option>
                <option>Not Sure</option>
              </select>
            </div>
            <div className="form-group"></div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">Areas of Interest</div>
          <div className="checkbox-grid">
            {[
              'AI CCTV Automation',
              'Smart Surveillance Systems',
              'Crowd or Customer Analytics',
              'Attendance Automation',
              'Infrastructure Monitoring',
              'Custom AI Solution',
              'Pilot Deployment',
            ].map((item) => (
              <label className="checkbox-item" key={item}>
                <input type="checkbox" name="interest" value={item} onChange={handleChange} />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">Project Requirements</div>
          <div className="form-group">
            <label>Describe your facility and automation objectives</label>
            <textarea
              className="form-input"
              name="requirements"
              placeholder="Tell us about your facility and what you'd like to achieve…"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">Preferred Contact Method</div>
          <div className="checkbox-grid">
            {['Email', 'Phone', 'Video Meeting'].map((m) => (
              <label className="checkbox-item" key={m}>
                <input type="radio" name="contactMethod" value={m} onChange={handleChange} defaultChecked={m === 'Email'} />
                {m}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="form-submit-btn">
          Request Consultation →
        </button>
      </form>
    </section>
  );
}
