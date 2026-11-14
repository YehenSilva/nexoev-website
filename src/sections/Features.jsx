import SectionHeading from '../components/SectionHeading.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';
import Reveal from '../components/Reveal.jsx';
import '../styles/Features.css';

const FEATURES = [
  {
    screen: 'ring',
    kicker: 'Adaptive Range Engine',
    title: 'Precision Range Prediction Tailored to Your Drive.',
    points: [
      'Personalized arrival range based on real-time vehicle telemetry and driving patterns',
      'Intelligent self-learning calibration that refines accuracy the more you drive',
      'Dynamic elevation compensation for steep climbs, regenerative descent, and AC draw',
      'Clear 3-tier feasibility verdict: Likely Feasible, Caution, or Stop Required',
    ],
    note: 'Evaluated on real-world driving trips achieving an average accuracy of 97.7% on arrival battery level.',
  },
  {
    screen: 'hazard',
    kicker: 'Hill Country Safety',
    title: 'NBRO Landslide & Weather Corridor Protection.',
    points: [
      'Specialized protection for Kadugannawa, Ramboda Pass, Nuwara Eliya, and Ella',
      'Real-time correlation with official National Building Research Organisation (NBRO) landslide alerts',
      'Monitors Dept. of Meteorology heavy rainfall advisories along your planned route',
      'Proactive energy buffer recommendations before embarking on steep mountain ascents',
    ],
    note: 'Automatic spatial route-segment intersection provides driver warnings well ahead of hazards.',
  },
  {
    screen: 'expense',
    kicker: 'Operating Cost Intelligence',
    title: 'EV Journey Expense Tracker & Operating Costs.',
    points: [
      'Record charging session costs and energy added in Sri Lankan Rupees (LKR)',
      'Track monthly EV running costs and monitor average cost-per-kilometer trends',
      'Clear financial visibility comparing electric running costs against petrol vehicles',
      'Maintain an organized history of charging receipts across home and public hubs',
    ],
    note: 'Gives drivers complete clarity on real-world EV operating expenses across Sri Lanka.',
  },
  {
    screen: 'map',
    kicker: 'Verified Charging Stations',
    title: 'Smart Station Ranking & En-Route Stop Planner.',
    points: [
      'Ranks compatible charging stations by reachability, connector match, and charging speed',
      'Instant filtering across CCS2, Type 2, and CHAdeMO fast DC chargers',
      'Community-verified uptime reports and real-world charging speed confirmations',
      'Calculates exact charging stop duration needed to reach your destination comfortably',
    ],
    note: 'Island-wide coverage across CEB, chargeNET, Greeneme, and independent fast-charging hubs.',
  },
  {
    screen: 'home',
    kicker: 'Universal Accessibility',
    title: 'Zero Hardware Required. Complete Offline Readiness.',
    points: [
      'Zero paid OBD-II hardware dongles or complex accessories required',
      'Runs directly on your smartphone with a native mobile interface for iOS and Android',
      'Offline Journey Packs store routes and interactive map tiles for zero-signal hill country',
      'Complete native trilingual localization in English, Sinhala (සිංහල), and Tamil (தமிழ்)',
    ],
    note: 'Engineered to ensure reliable navigation even in remote mountain dead-zones.',
  },
  {
    screen: 'share',
    kicker: 'Connected Journeys',
    title: 'Shareable Journey Briefs & Route Templates.',
    points: [
      'Generate a secure shareable link for family or friends showing route, ETA, and arrival battery',
      'Save frequently travelled corridors (e.g. Colombo ⇄ Kandy) as 1-tap personal route templates',
      'Templates automatically recompute live energy demands with current weather and starting charge',
      'Provides peace of mind for loved ones with transparent arrival buffer and charging stop updates',
    ],
    note: 'Built to streamline daily commutes and keep families connected during long-distance EV travel.',
  },
  {
    screen: 'assist',
    kicker: 'Trilingual Roadside Support',
    title: 'Multilingual EV Assistance & Safety Protocols.',
    points: [
      'Full trilingual support available in English, Sinhala (සිංහල), and Tamil (தமிழ்)',
      'Verified EV flatbed towing guide explaining why wheel-lift towing damages electric drivetrains',
      'Plain-language dashboard warning glossary explaining battery turtle mode and thermal alerts',
      'Offline-accessible roadside emergency procedures when travelling through remote hill country',
    ],
    note: 'Empowers drivers with essential EV safety knowledge, protecting high-voltage motors from towing damage.',
  },
  {
    screen: 'hist',
    kicker: 'Verified Reliability',
    title: 'Rigorously Tested & Proven on Sri Lankan Terrains.',
    points: [
      '18 automated verification test suites passed across all application layers',
      'Tested on real-world Sri Lankan road journeys achieving 97.7% prediction accuracy',
      'Clean, responsive user interface designed for effortless one-handed mobile use',
      'Strict driver privacy controls with transparent data handling and zero commercial sharing',
    ],
    note: 'Full automated unit and integration tests verify every prediction before release.',
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHeading
          title="Practical Innovations. Built for Sri Lankan Roads."
          text="Explore the eight core capabilities engineered to turn range anxiety into confident, predictable EV travel."
        />
        {FEATURES.map((f) => (
          <div className="feature-row" key={f.screen}>
            <Reveal className="feature-row__text">
              <span className="feature-row__kicker">{f.kicker}</span>
              <h2>{f.title}</h2>
              <ul>
                {f.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {f.note && (
                <div className="note">
                  <strong>Practical Benefit: </strong>
                  {f.note}
                </div>
              )}
            </Reveal>
            <Reveal className="feature-row__visual" delay={120}>
              <PhoneMockup screen={f.screen} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
