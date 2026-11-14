import { Car, Battery, MapPin, Route, CheckCircle, RotateCw } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import '../styles/HowItWorks.css';

const STEPS = [
  {
    Icon: Car,
    title: 'Choose EV & Enter Battery',
    text: 'Select your EV model and enter your current battery percentage alongside your desired safety reserve buffer.',
  },
  {
    Icon: MapPin,
    title: 'Pick Destination & Route',
    text: 'Search your destination. NexoEV analyzes driving distance, road geometry, and cumulative elevation climb profiles.',
  },
  {
    Icon: CheckCircle,
    title: 'View Feasibility & Stops',
    text: 'Review your trip feasibility verdict (Likely Feasible / Caution / Stop Required), estimated arrival battery, and verified charging options.',
  },
  {
    Icon: RotateCw,
    title: 'Record Actuals & Improve',
    text: 'After driving, log your ending battery and actual distance to continuously refine your personal vehicle efficiency profile.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section section--tint" id="how-it-works">
      <div className="container">
        <SectionHeading
          title="How NexoEV Works. Plain & Transparent."
          text="NexoEV checks how much energy your vehicle has, estimates how much the route needs, and shows whether the trip appears feasible."
        />
        <ol className="steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {STEPS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" className="step" key={title} delay={i * 120}>
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
