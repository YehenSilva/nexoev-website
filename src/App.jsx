import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Benefits from './sections/Benefits.jsx';
import Features from './sections/Features.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import AppShowcase from './sections/AppShowcase.jsx';
import About from './sections/About.jsx';
import FAQ from './sections/FAQ.jsx';
import DownloadCTA from './sections/DownloadCTA.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <AppShowcase />
        <About />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
