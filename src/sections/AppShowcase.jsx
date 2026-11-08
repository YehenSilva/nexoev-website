import SectionHeading from '../components/SectionHeading.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';
import Button from '../components/Button.jsx';
import '../styles/AppShowcase.css';

const SHOTS = [['home', 'Home dashboard'], ['trip', 'Trip planning'], ['ring', 'Battery prediction'], ['map', 'Charging discovery']];

export default function AppShowcase() {
  return (
    <section className="section" id="showcase">
      <div className="container">
        <SectionHeading title="Your EV Companion, Designed for Your Journey." />
        <div className="showcase">
          {SHOTS.map(([screen, label], i) => (
            <figure key={screen} className="showcase__item">
              <PhoneMockup screen={screen} floating delay={i * 0.6} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="showcase__cta"><Button href="#download">Download NexoEV</Button></div>
      </div>
    </section>
  );
}
