import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import FAQItem from '../components/FAQItem.jsx';
import '../styles/FAQ.css';

const FAQS = [
  ['What is NexoEV?', 'NexoEV is an EV companion app that helps you plan journeys, estimate your battery level on arrival and explore charging station information.'],
  ['How does NexoEV calculate battery consumption?', 'It multiplies trip distance by your vehicle’s baseline energy consumption, then subtracts that from the energy available at your starting battery level, based on usable battery capacity.'],
  ['Can I plan my journey before driving?', 'Yes. Choose a destination, enter your starting battery percentage and your desired arrival reserve, then review the estimate.'],
  ['Can I customise my vehicle information?', 'Yes. You can enter and edit your vehicle’s battery capacity and energy consumption details.'],
  ['Can I discover charging stations?', 'Yes. You can explore station information, distances, connector types and charging power. The current version uses demonstration data.'],
  ['Does NexoEV show live charging station availability?', 'No. The current app does not show live availability or real-time charger status.'],
  ['Are battery predictions guaranteed?', 'No. Predictions are baseline estimates. They do not currently adjust for weather, traffic or elevation, so real-world results can differ.'],
  ['Where can I download NexoEV?', 'Google Play and App Store links will be added here once the official listings are available.'],
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHeading title="Frequently Asked Questions." />
        {FAQS.map(([q, a], i) => (
          <FAQItem key={q} id={i} question={q} answer={a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}
