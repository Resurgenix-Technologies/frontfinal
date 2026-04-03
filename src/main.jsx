import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Remove pre-rendered SEO tags so Helmet can own them after hydration.
document.head.querySelectorAll('[data-rh="true"]').forEach((node) => node.remove());

// Remove the SEO fallback content once React hydrates
const fallback = document.getElementById('seo-fallback');
if (fallback) fallback.remove();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
