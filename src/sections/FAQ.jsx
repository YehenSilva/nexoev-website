import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import FAQItem from '../components/FAQItem.jsx';
import '../styles/FAQ.css';

const FAQS = [
  [
    'What is NexoEV and what makes it unique for Sri Lankan drivers?',
    'NexoEV is a mobile-first EV companion engineered specifically for Sri Lankan driving conditions. Unlike generic global map apps that assume flat terrain and steady climates, NexoEV dynamically factors in steep hill country elevation climbs, tropical AC consumption, official landslide weather advisories, and community charger reliability reports to provide realistic arrival battery predictions and smart charging advice.',
  ],
  [
    'How does NexoEV predict my arrival battery so accurately?',
    'Our range estimation model combines verified vehicle specifications with real-world context: your personal driving efficiency, elevation ascents and downhill regenerative braking, cargo and passenger load, and cabin air conditioning draw. Rather than guessing, it delivers transparent feasibility verdicts (Likely Feasible, Caution, or Charging Stop Required) with a customizable battery safety reserve.',
  ],
  [
    'What prediction accuracy has been achieved on real-world trips?',
    'Across diverse Sri Lankan driving routes—including coastal expressways, urban traffic, and steep highland climbs—NexoEV achieves an average arrival battery accuracy of 97.7% (with an average margin of error of just 2.3% on arrival state of charge), giving drivers the confidence to plan trips without range anxiety.',
  ],
  [
    'How does NexoEV handle steep mountain corridors (Kadugannawa, Ramboda, Nuwara Eliya, Ella)?',
    'Sri Lanka’s central highlands present rapid elevation gains that consume battery significantly faster than flat roads. NexoEV automatically analyzes route topography, calculates the extra energy required for steep climbs, credits downhill regenerative recovery, and intersects your route with official National Building Research Organisation (NBRO) landslide advisories and Met Department weather notices.',
  ],
  [
    'How does the EV Journey Expense Tracker help monitor running costs?',
    'The Expense Tracker lets drivers record charging session expenses in Sri Lankan Rupees (LKR), track energy added per charge, and calculate average monthly operating costs. It gives EV owners clear insights into their real-world cost-per-kilometer and total savings compared to petrol vehicles.',
  ],
  [
    'Do I need to buy expensive OBD-II dongles or hardware to use NexoEV?',
    'Not at all. NexoEV is designed with zero-hardware accessibility in mind. Everything runs directly on your smartphone through our mobile app and installable web application, with full offline mode support for routes where mobile cellular data is unavailable.',
  ],
  [
    'How does the Smart Charger Finder rank stations along my route?',
    'Instead of just displaying pins on a map, NexoEV evaluates stations based on connector compatibility (CCS2, Type 2, CHAdeMO), charging speed, detour distance, and community check-in reliability from other drivers across CEB, chargeNET, Greeneme, and independent networks.',
  ],
  [
    'Can I use NexoEV without an active internet connection?',
    'Yes! With our Offline Journey Pack feature, you can download your route, elevation profile, and map tiles before you leave. Even in remote hill country areas where cellular signals drop, NexoEV continues to provide full journey guidance.',
  ],
  [
    'How do Shareable Journey Briefs and Route Templates work?',
    'NexoEV lets you generate a secure web link for any planned trip. Family and friends can view your live estimated arrival battery, remaining range, and planned charging stops in any web browser without logging in. Additionally, Personal Journey Templates allow you to save frequent routes (such as a daily commute) and recompute feasibility with real-time weather and current battery at the tap of a button.',
  ],
  [
    'Are Sinhala and Tamil languages supported?',
    'Yes! NexoEV is built from the ground up for Sri Lanka with full trilingual support in English, Sinhala (සිංහල), and Tamil (தமிழ்), including localized emergency roadside assistance instructions, verified flatbed towing guidance, and plain-language dashboard warning glossaries.',
  ],
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHeading
          title="Frequently Asked Questions."
          text="Clear answers covering our intelligent range prediction, hill country safety, shareable journey briefs, expense tracking, and mobile accessibility."
        />
        {FAQS.map(([q, a], i) => (
          <FAQItem
            key={q}
            id={i}
            question={q}
            answer={a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
