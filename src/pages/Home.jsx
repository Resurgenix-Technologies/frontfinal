import { useEffect, useState, useCallback } from 'react';
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

      <Consultation onToast={showToast} />
      <Contact onToast={showToast} />

      <ContactPopup />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
