import Button from '../components/Button.jsx';
import StoreBadges from '../components/StoreBadges.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';
import CarIllustration from '../components/CarIllustration.jsx';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="hero__label">YOUR SMART ELECTRIC DRIVING COMPANION</span>
          <h1>Drive Smarter.<br />Go Further.<br /><span className="hl">Stay Charged.</span></h1>
          <p className="lead">Take control of every electric journey with NexoEV. Plan your trips, estimate your battery usage and explore charging options with your intelligent EV companion.</p>
          <div className="hero__buttons">
            <Button href="#download">Download the App</Button>
            <Button href="#features" variant="ghost">Explore Features</Button>
          </div>
          <StoreBadges />
        </div>
        <div className="hero__visual">
          <div className="hero__glow" />
          <CarIllustration className="hero__car" />
          <PhoneMockup screen="home" floating />
          <div className="hero__chip hero__chip--a"><b>70%</b><span>Battery · sample</span></div>
          <div className="hero__chip hero__chip--b"><b>262 km</b><span>Est. range · sample</span></div>
        </div>
      </div>
    </section>
  );
}
