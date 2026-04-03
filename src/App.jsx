import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Reviews from './pages/Reviews';
import About from './pages/About';
import AutomatingIndustries from './pages/AutomatingIndustries';
import CctvAutomationGuide from './pages/CctvAutomationGuide';
import QrDiningSolutions from './pages/QrDiningSolutions';
import Blog from './pages/Blog';
import BlogIndustryAutomationTrends2026 from './pages/BlogIndustryAutomationTrends2026';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppInner() {
  const [navVisible, setNavVisible] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const shouldDelayNav = isHome && !sessionStorage.getItem('introPlayed');

  useEffect(() => {
    if (!shouldDelayNav) {
      return undefined;
    }

    const timer = setTimeout(() => setNavVisible(true), 2500);
    return () => clearTimeout(timer);
  }, [shouldDelayNav]);

  return (
    <>
      <ScrollToTop />
      <Navbar visible={!shouldDelayNav || navVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/automating-industries" element={<AutomatingIndustries />} />
        <Route path="/cctv-automation-guide" element={<CctvAutomationGuide />} />
        <Route path="/qr-dining-solutions" element={<QrDiningSolutions />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/industry-automation-trends-2026"
          element={<BlogIndustryAutomationTrends2026 />}
        />
        <Route path="/careers" element={<Careers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
