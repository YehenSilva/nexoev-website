import { Car, Route, Gauge } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import '../styles/HowItWorks.css';

const STEPS = [
  { Icon: Car, title: 'Add Your Vehicle', text: 'Enter your vehicle’s battery capacity and energy consumption details.' },
  { Icon: Route, title: 'Plan Your Journey', text: 'Choose a destination and enter your starting battery percentage.' },
  { Icon: Gauge, title: 'Review Your Prediction', text: 'Explore estimated energy consumption and your predicted arrival battery percentage.' },
];

export default function HowItWorks() {
  return (
    <section className="section section--tint" id="how-it-works">
      <div className="container">
        <SectionHeading title="Three Simple Steps. Smarter EV Driving." />
        <ol className="steps">
          {STEPS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" className="step" key={title} delay={i * 150}>
              <span className="step__num">{i + 1}</span>
              <Icon size={28} strokeWidth={1.7} className="step__icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
