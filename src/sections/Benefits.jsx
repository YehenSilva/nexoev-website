import { Calculator, Mountain, Wallet, Share2, Compass, Languages } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import '../styles/Benefits.css';

const ITEMS = [
  {
    Icon: Calculator,
    title: 'Adaptive Range Engine',
    text: 'Factors in your personal driving habits, steep mountain ascents, downhill regeneration, vehicle payload, and cabin AC draw. Proven 97.7% arrival accuracy.',
  },
  {
    Icon: Mountain,
    title: 'Sri Lanka Corridor Intel',
    text: 'Proactively correlates your route with official NBRO landslide alerts and Met Dept weather notices across Kadugannawa, Ramboda Pass, Nuwara Eliya, and Ella.',
  },
  {
    Icon: Wallet,
    title: 'EV Journey Expense Tracker',
    text: 'Log charging sessions, track electricity costs in Sri Lankan Rupees (LKR), and monitor monthly EV operating expenditures against petrol equivalents.',
  },
  {
    Icon: Share2,
    title: 'Shareable Briefs & Templates',
    text: 'Generate secure links to share live arrival battery and planned charging stops with family, and save frequent routes for instant 1-tap replanning.',
  },
  {
    Icon: Compass,
    title: 'Smart Charger Station Ranker',
    text: 'Ranks nearby stations by battery reachability, connector match (CCS2, Type 2, CHAdeMO), charging speed, and driver-verified uptime reports across Sri Lanka.',
  },
  {
    Icon: Languages,
    title: 'Multilingual Assistance Centre',
    text: 'Dedicated guidance in Sinhala, Tamil, and English covering official EV flatbed-only towing rules, roadside breakdown support, and dashboard warning glossaries.',
  },
];

export default function Benefits() {
  return (
    <section className="section section--tint" id="benefits">
      <div className="container">
        <SectionHeading
          title="Engineered Specifically for Sri Lanka."
          text="A complete EV companion addressing physical elevation, localized hazards, operating expenses, shareable briefs, and trilingual roadside support."
        />
        <div className="benefits__grid">
          {ITEMS.map((it, i) => (
            <FeatureCard key={it.title} {...it} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
