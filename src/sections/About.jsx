import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CarIllustration from '../components/CarIllustration.jsx';
import '../styles/About.css';

export default function About() {
  return (
    <section className="section section--tint" id="about">
      <div className="container about">
        <Reveal>
          <SectionHeading center={false} title="Driving Towards a Smarter Electric Future." />
          <p className="lead">NexoEV is designed to make electric vehicle journeys easier to understand and plan. By turning your vehicle’s details and a few trip inputs into a clear battery estimate, it helps you prepare before you set off.</p>
          <p className="lead" style={{ marginTop: 16 }}>Battery awareness, journey estimation and convenient charging discovery come together in one simple companion app.</p>
        </Reveal>
        <Reveal className="about__visual" delay={120}><CarIllustration /></Reveal>
      </div>
    </section>
  );
}
