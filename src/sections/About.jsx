import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import CarIllustration from '../components/CarIllustration.jsx';
import '../styles/About.css';

export default function About({ onNavigate }) {
  const handleMeetTeam = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/about');
    }
  };

  return (
    <section className="section section--tint" id="about">
      <div className="container about">
        <Reveal>
          <SectionHeading center={false} title="Can I Complete My Journey With the Battery I Have?" />
          <p className="lead">
            Generic global apps like ABRP, Google Maps, and PlugShare lack Sri Lanka-specific topography and landslide hazard data, while local apps like ChargePath, EZGo, and EVChargeLK only show static charger pins without journey feasibility or reliability scores.
          </p>
          <p className="lead" style={{ marginTop: 16 }}>
            NexoEV bridges this gap with dynamic elevation-aware range estimation (97.7% accuracy), official NBRO landslide corridor intelligence for Kadugannawa, Ramboda, Nuwara Eliya, and Ella, EV journey expense tracking, and zero-hardware offline accessibility in English, Sinhala, and Tamil.
          </p>
          <div style={{ marginTop: 28 }}>
            <Button href="/about" onClick={handleMeetTeam}>
              Meet Our Team &amp; Story &rarr;
            </Button>
          </div>
        </Reveal>
        <Reveal className="about__visual" delay={120}>
          <CarIllustration />
        </Reveal>
      </div>
    </section>
  );
}
