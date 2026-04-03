import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';
import IntroAnimation from '../components/IntroAnimation';
import CctvOverlay from '../components/CctvOverlay';
import ContactPopup from '../components/ContactPopup';
import Toast from '../components/Toast';
import { DomeCam, BulletCam } from '../components/CctvCameras';
import Hero from '../sections/Hero';
import WhatWeDo from '../sections/WhatWeDo';
import Services from '../sections/Services';
import Consultation from '../sections/Consultation';
import Contact from '../sections/Contact';
import '../styles/content-pages.css';

const resourceLinks = [
  {
    title: 'Automating Industries',
    description:
      'A deep pillar page on how camera-led sensing, workflow design, and measurable KPIs help automating industries at scale.',
    to: '/automating-industries',
    label: 'Read the pillar page',
  },
  {
    title: 'CCTV Automation Guide',
    description:
      'A technical guide to architecture, deployment, privacy controls, and real production KPIs for CCTV automation.',
    to: '/cctv-automation-guide',
    label: 'Explore the guide',
  },
  {
    title: 'QR Dining Solutions',
    description:
      'A hospitality landing page covering digital menus, order flow, and how QR dining fits modern service operations.',
    to: '/qr-dining-solutions',
    label: 'See the solution',
  },
];

const homeFaqItems = [
  {
    question: 'How does Resurgenix help with automating industries using existing infrastructure?',
    answer:
      'We use existing CCTV networks as an operational sensing layer, then apply computer vision, event logic, and reporting to automate monitoring, alerts, and decision support without forcing a full hardware refresh.',
  },
  {
    question: 'What kinds of workflows can CCTV automation improve?',
    answer:
      'CCTV automation can support occupancy monitoring, queue visibility, safety checks, restricted-zone alerts, attendance or access workflows, and process confirmation across industrial, commercial, and hospitality environments.',
  },
  {
    question: 'Is QR dining only for contactless menus?',
    answer:
      'No. QR dining can also improve menu control, order speed, service timing, and operational visibility for restaurants and cafés that want a smoother guest journey.',
  },
  {
    question: 'How quickly can an automation pilot show value?',
    answer:
      'Focused pilots are often scoped around a 30 to 90 day window with clear KPIs such as faster response time, lower manual audit effort, improved queue visibility, or stronger service throughput.',
  },
];

export default function Home() {
  const [introDone, setIntroDone] = useState(
    () => !!sessionStorage.getItem('introPlayed')
  );
  const [toast, setToast] = useState({ visible: false, message: '' });

  const handleIntroDone = useCallback(() => {
    setIntroDone(true);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = 'hidden';
    }

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

    const delay = introDone ? 100 : 2600;
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, delay);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [introDone]);

  useEffect(() => {
    if (introDone && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [introDone]);

  const showToast = (msg) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast({ visible: false, message: '' }), 3500);
  };

  return (
    <>
      <SEO
        title="Automating Industries with CCTV Automation and QR Dining"
        description="Resurgenix Technologies helps automating industries through AI-powered CCTV automation, computer vision analytics, and QR dining solutions for restaurants, retail, factories, offices, hospitals, and campuses."
        path="/"
        keywords={[
          'automating industries',
          'CCTV automation',
          'QR dining',
          'computer vision analytics',
          'industry automation',
        ]}
        faqItems={homeFaqItems}
      />

      {!introDone && <IntroAnimation onComplete={handleIntroDone} />}

      <div style={{ position: 'relative' }}>
        <Hero />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <CctvOverlay />
        </div>
        {/* Decorative CCTV cameras */}
        <DomeCam style={{ position: 'absolute', top: '15%', right: '8%', opacity: 0.04 }} />
        <BulletCam style={{ position: 'absolute', bottom: '20%', left: '5%', opacity: 0.03 }} />
      </div>

      <div style={{ position: 'relative' }}>
        <WhatWeDo />
        <BulletCam style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.03 }} />
      </div>

      <div style={{ position: 'relative' }}>
        <Services />
        <DomeCam style={{ position: 'absolute', bottom: '2rem', left: '2rem', opacity: 0.04 }} />
      </div>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="reveal">
          <span className="section-label">Featured Resources</span>
          <h2 className="section-title">Explore our guides on CCTV automation, QR dining, and automating industries</h2>
          <p className="section-desc" style={{ maxWidth: '760px' }}>
            These pages are designed for buyers, operators, and technical teams evaluating production-ready
            automation across industrial, commercial, and hospitality environments.
          </p>
        </div>

        <div className="content-link-grid">
          {resourceLinks.map((resource) => (
            <article className="content-link-card reveal" key={resource.title}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <Link to={resource.to}>
                <span>{resource.label}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <FAQSection
        eyebrow="Homepage FAQ"
        title="What do teams ask us about CCTV automation, QR dining, and automating industries?"
        intro="We added these answers for both search clarity and buyer clarity. They reflect the questions we hear most often in discovery conversations."
        items={homeFaqItems}
        sectionId="home-faq"
      />

      <Consultation onToast={showToast} />
      <Contact onToast={showToast} />

      <ContactPopup />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
