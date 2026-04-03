import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';
import usePageReveal from '../hooks/usePageReveal';
import '../styles/about.css';
import '../styles/content-pages.css';

const milestones = [
  { year: '2025', text: 'Idea conceived — Identified the gap between legacy CCTV and modern AI capabilities.' },
  { year: '2025', text: 'Core AI models developed — Built proprietary computer vision pipelines for real-time CCTV analytics.' },
  { year: '2026', text: 'Resurgenix Technologies Pvt. Ltd. officially incorporated in Kolkata, India.' },
  { year: '2026', text: 'Launched AI CCTV Hub — First commercial deployment in cafés and retail environments.' },
  { year: '2026', text: 'Launched QR Dining — Smart contactless ordering platform for restaurants.' },
];

const values = [
  { icon: '◎', title: 'Innovation First', desc: 'We push the boundaries of computer vision and AI to solve real-world operational challenges.' },
  { icon: '⚡', title: 'Practical Impact', desc: 'Every solution is designed to deliver measurable ROI by leveraging existing infrastructure.' },
  { icon: '🔒', title: 'Trust & Security', desc: 'We prioritize data privacy, secure processing, and ethical AI in every deployment.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'We work closely with organizations to understand their unique needs and deliver tailored solutions.' },
];

const automationApproach = [
  {
    title: 'Existing infrastructure first',
    description:
      'We start with the cameras, workflows, and operating constraints a client already has. That makes CCTV automation faster to deploy and easier to justify.',
  },
  {
    title: 'Operational outcomes over model hype',
    description:
      'Our goal is to reduce response time, surface bottlenecks, improve compliance, and create measurable process improvements instead of shipping disconnected analytics.',
  },
  {
    title: 'Cross-environment automation',
    description:
      'We build for industrial sites, offices, campuses, healthcare spaces, retail environments, and restaurants, which keeps our automation thinking grounded in real operations.',
  },
  {
    title: 'Human-readable systems',
    description:
      'The best AI systems are explainable to operators. We focus on clear events, reviewable thresholds, role-based visibility, and governance that can scale.',
  },
];

const aboutFaqItems = [
  {
    question: 'What kind of company is Resurgenix Technologies?',
    answer:
      'Resurgenix Technologies is an AI-driven technology company building CCTV automation, computer vision analytics, and QR dining solutions for operational environments.',
  },
  {
    question: 'How does Resurgenix approach automating industries?',
    answer:
      'We combine existing CCTV infrastructure, computer vision models, workflow logic, and KPI measurement so organizations can automate visible operational processes without unnecessary complexity.',
  },
  {
    question: 'Why does Resurgenix work on both CCTV automation and QR dining?',
    answer:
      'Both product areas are part of the same operational philosophy: turn real-world activity into structured data and faster decisions across industries, including hospitality.',
  },
  {
    question: 'Does Resurgenix only work with new infrastructure?',
    answer:
      'No. We are intentionally focused on extracting value from existing infrastructure first, then recommending upgrades only where a workflow truly requires them.',
  },
];

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Resurgenix Technologies',
  description:
    'Learn how Resurgenix Technologies approaches automating industries through CCTV automation, computer vision analytics, and QR dining solutions.',
  url: 'https://www.resurgenixtechnologies.com/about',
};

export default function About() {
  usePageReveal();

  return (
    <>
      <SEO
        title="About Us — Automating Industries with Vision AI"
        description="Learn about Resurgenix Technologies, our mission, and how we approach automating industries through CCTV automation, computer vision analytics, and QR dining solutions."
        path="/about"
        keywords={[
          'automating industries',
          'CCTV automation company',
          'QR dining solutions',
          'computer vision company',
        ]}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
        faqItems={aboutFaqItems}
        schema={aboutPageSchema}
      />

      <div className="about-hero reveal">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'About' },
          ]}
        />
        <span className="section-label">About Resurgenix Technologies</span>
        <h1>Building the Future of Intelligent Infrastructure</h1>
        <p>
          Resurgenix Technologies is an AI-powered technology company headquartered
          in Kolkata, India. We transform traditional CCTV camera networks into
          intelligent automation platforms using advanced computer vision and
          real-time operational analytics, helping organizations see more, act faster,
          and operate smarter across industrial, commercial, and hospitality environments.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our work sits at the intersection of <Link to="/cctv-automation-guide">CCTV automation</Link>,
          workflow orchestration, and practical industry execution. Whether a client is
          exploring <Link to="/automating-industries">automating industries</Link> at scale or
          improving guest operations with <Link to="/qr-dining-solutions">QR dining</Link>, we focus on
          production-ready systems that fit existing infrastructure and measurable business goals.
        </p>
      </div>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="reveal">
          <span className="section-label">Our Mission</span>
          <h2 className="section-title">Making Every Camera Intelligent</h2>
          <p className="section-desc" style={{ maxWidth: '700px' }}>
            We believe the world's existing CCTV infrastructure holds untapped
            potential. Our mission is to unlock that potential through AI — enabling
            organizations across industries to automate processes, enhance safety,
            and generate actionable insights from their camera networks, without
            replacing a single piece of hardware.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">How we think about industry automation</h2>
          <p className="section-desc" style={{ maxWidth: '760px' }}>
            Our approach is built around operational reality: existing cameras, real service pressure,
            measurable KPIs, and a rollout path teams can actually sustain.
          </p>
        </div>

        <div className="content-grid-2">
          {automationApproach.map((item) => (
            <article className="content-card reveal" key={item.title}>
              <span className="content-card-kicker">Operating Principle</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="reveal">
          <span className="section-label">Our Values</span>
          <h2 className="section-title">What Drives Us</h2>
        </div>
        <div className="about-values-grid">
          {values.map((v, i) => (
            <div className="about-value-card reveal" key={i}>
              <div className="about-value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="content-prose article-layout">
          <section className="reveal">
            <span className="section-label">Industry Focus</span>
            <h2>Why do we focus so strongly on automating industries with visual intelligence?</h2>
            <p>
              Because the gap between observation and action is still enormous in most operating
              environments. Cameras are everywhere, but useful operational signals are often trapped
              inside footage nobody has time to review. Managers still rely on delayed reporting,
              manual audits, and fragmented dashboards to understand what happened across a site.
              We see that as a solvable problem.
            </p>
            <p>
              By turning existing CCTV infrastructure into a measurable operations layer, we help
              organizations move faster without forcing unnecessary complexity. That is why our content
              and product strategy now centers on core themes like CCTV automation, automating industries,
              and QR dining. These are not isolated keywords for us. They are the operating categories
              where we believe applied AI can create clear, measurable value.
            </p>
            <p>
              We also believe technical clarity is part of trust. Buyers should understand what is being
              measured, how events are defined, how privacy is handled, and which KPI a deployment is
              expected to improve. That philosophy shapes both the systems we build and the way we explain
              them on this website and in our <Link to="/blog">blog</Link>.
            </p>
          </section>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="reveal">
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">Milestones</h2>
        </div>
        <div className="about-timeline">
          {milestones.map((m, i) => (
            <div className="about-timeline-item reveal" key={i}>
              <div className="about-timeline-year">{m.year}</div>
              <div className="about-timeline-line"></div>
              <div className="about-timeline-text">{m.text}</div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection
        eyebrow="About FAQ"
        title="Questions about our company and our automation approach"
        intro="These answers are meant to make our operating philosophy clearer for buyers, partners, and search engines alike."
        items={aboutFaqItems}
        sectionId="about-faq"
      />

      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Transform Your Infrastructure?</h2>
          <p className="section-desc" style={{ margin: '0 auto 2rem' }}>
            Join organizations across India already leveraging AI-powered CCTV automation,
            operational analytics, and smarter digital service experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#consultation" className="btn btn-primary">Request a Consultation</Link>
            <Link to="/blog" className="btn btn-outline">Read Our Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
