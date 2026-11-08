import { BatteryCharging, Route, PlugZap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import '../styles/Benefits.css';

const ITEMS = [
  { Icon: BatteryCharging, title: 'Smart Battery Monitoring', text: 'Understand your battery level and estimated remaining driving range at a glance.' },
  { Icon: Route, title: 'Intelligent Trip Planning', text: 'Plan journeys and estimate the battery level you could have on arrival.' },
  { Icon: PlugZap, title: 'Charging Discovery', text: 'Explore charging station information, distances, connector types and charging power.' },
];

export default function Benefits() {
  return (
    <section className="section section--tint" id="benefits">
      <div className="container">
        <SectionHeading title="Everything You Need for a Smarter EV Journey." />
        <div className="benefits__grid">{ITEMS.map((it, i) => <FeatureCard key={it.title} {...it} delay={i * 100} />)}</div>
      </div>
    </section>
  );
}
