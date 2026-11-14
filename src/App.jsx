import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';

import Hero from './sections/Hero.jsx';
import ValidatedBy from './components/ValidatedBy.jsx';
import Platform from './sections/Platform.jsx';
import Benefits from './sections/Benefits.jsx';
import Features from './sections/Features.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import VideoShowcase from './sections/VideoShowcase.jsx';
import About from './sections/About.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import WaitlistCTA from './sections/WaitlistCTA.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname === '/about' ? '/about' : '/';
  });

  useEffect(() => {
    // If the page was opened with #home in the URL, remove it cleanly
    if (window.location.hash === '#home') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const onPopState = () => {
      setCurrentPath(window.location.pathname === '/about' ? '/about' : '/');
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to) => {
    if (to === '/about') {
      window.history.pushState(null, '', '/about');
      setCurrentPath('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (to === '/') {
      window.history.pushState(null, '', '/');
      setCurrentPath('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (to.startsWith('/#') || to.startsWith('#')) {
      const hash = to.includes('#') ? '#' + to.split('#')[1] : '';
      if (currentPath !== '/') {
        window.history.pushState(null, '', '/' + hash);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '/' + hash);
      }
    }
  };

  return (
    <>
      <Preloader />
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      {currentPath === '/about' ? (
        <main>
          <AboutPage onNavigate={navigate} />
        </main>
      ) : (
        <main>
          <Hero />
          <ValidatedBy />
          <Platform />
          <Benefits />
          <Features />
          <HowItWorks />
          <VideoShowcase />
          <About onNavigate={navigate} />
          <FAQ />
          <Contact />
          <WaitlistCTA />
        </main>
      )}
      <Footer currentPath={currentPath} onNavigate={navigate} />
    </>
  );
}
