import { useState } from 'react';
import {
  Cpu,
  Check,
  Zap,
  Sparkles,
  Gauge,
  Mountain,
  Wallet,
  Compass,
  Share2,
  Languages,
  Smartphone,
  Award,
  ShieldCheck,
  WifiOff,
} from 'lucide-react';
import PhoneMockup from '../components/PhoneMockup.jsx';
import Reveal from '../components/Reveal.jsx';
import '../styles/Platform.css';

const MODULES = [
  {
    id: 'ring',
    tabNum: '01',
    tabLabel: 'Range Engine',
    icon: Gauge,
    sprint: 'Precision Range',
    pill: 'Adaptive Range Intelligence',
    title: 'Range Prediction Tailored to Your Drive.',
    desc: 'Goes far beyond standard dashboard meters by dynamically factoring in individual driving behavior, mountain elevation, passenger load, and air-conditioning usage for true peace of mind.',
    capabilities: [
      'Adapts dynamically to your real-world driving habits and personal vehicle efficiency',
      'Compensates for steep mountain climbs, downhill regenerative braking, and AC draw',
      'Clear 3-tier feasibility verdict: Likely Feasible, Caution, or Charging Stop Required',
      'Customizable arrival safety reserve ensures you always arrive with comfortable buffer',
    ],
  },
  {
    id: 'hazard',
    tabNum: '02',
    tabLabel: 'Highland Safety',
    icon: Mountain,
    sprint: 'Corridor Safety',
    pill: 'Hill Country Hazard Intel',
    title: 'Engineered for Kandy, Nuwara Eliya & Ella.',
    desc: 'Sri Lanka’s central highlands present dramatic elevation changes and sudden weather shifts. NexoEV seamlessly factors steep ascents and official landslide alerts directly into your route.',
    capabilities: [
      'Proactive route alerts along key mountain corridors including Kadugannawa and Ramboda Pass',
      'Intelligent energy buffer recommendations before tackling steep uphill mountain ascents',
      'Monitors official National Building Research Organisation (NBRO) landslide advisories',
      'Recommends safe alternate routes when heavy tropical downpours affect mountain passes',
    ],
  },
  {
    id: 'expense',
    tabNum: '03',
    tabLabel: 'Expense Tracker',
    icon: Wallet,
    sprint: 'Operating Costs',
    pill: 'Journey Cost Intelligence',
    title: 'Track Charging Expenses & Monthly Running Costs.',
    desc: 'Log charging sessions, track total energy added in kilowatt-hours, and monitor your monthly EV operating expenditures in Sri Lankan Rupees (LKR) with clear cost-per-kilometer insights.',
    capabilities: [
      'Log charging session expenses and energy added in Sri Lankan Rupees (LKR)',
      'Track monthly EV running costs and monitor average cost-per-kilometer trends',
      'Clear financial visibility comparing electric running costs against petrol vehicles',
      'Maintain an organized history of charging receipts across home and public hubs',
    ],
  },
  {
    id: 'map',
    tabNum: '04',
    tabLabel: 'Charger Finder',
    icon: Compass,
    sprint: 'Verified Charging',
    pill: 'Live Station Matching',
    title: 'Verified Station Ranking & Smart Stop Planning.',
    desc: 'Never arrive at an out-of-order or occupied charger. NexoEV scores stations along your route by connector compatibility, charging speed, and community reliability check-ins.',
    capabilities: [
      'Filter instantly by compatible connectors: CCS2, Type 2, and CHAdeMO fast DC chargers',
      'Community-verified uptime reports and real-world charging speed confirmations',
      'Smart stop planner calculates the exact charging minutes needed to reach your destination',
      'Comprehensive coverage across CEB, chargeNET, Greeneme, and independent fast-charging hubs',
    ],
  },
  {
    id: 'share',
    tabNum: '05',
    tabLabel: 'Journey Briefs',
    icon: Share2,
    sprint: 'Journey Sharing',
    pill: 'Shareable Briefs & Saved Templates',
    title: 'Share Live Trip Briefs & Save Route Templates.',
    desc: 'Generate secure web links so family and friends can track your live ETA and arrival battery reserve, or save frequent corridors like Colombo ⇄ Kandy for instant 1-tap replanning.',
    capabilities: [
      'Generate a secure shareable link for family or friends showing route, ETA, and arrival battery',
      'Save frequently travelled corridors (e.g. Colombo ⇄ Kandy) as 1-tap personal route templates',
      'Templates automatically recompute live energy demands with current weather and starting charge',
      'Provides peace of mind for loved ones with transparent arrival buffer and charging stop updates',
    ],
  },
  {
    id: 'assist',
    tabNum: '06',
    tabLabel: 'Assistance Centre',
    icon: Languages,
    sprint: 'Driver Safety',
    pill: 'Trilingual Roadside Support',
    title: 'Multilingual EV Assistance & Safety Guidance.',
    desc: 'Dedicated roadside emergency protocols and dashboard warning glossaries in Sinhala, Tamil, and English, engineered to protect electric vehicles from improper towing damage.',
    capabilities: [
      'Full trilingual support available in English, Sinhala (සිංහල), and Tamil (தமிழ்)',
      'Verified EV flatbed-only towing guide explaining why wheel-lift towing damages electric drivetrains',
      'Plain-language dashboard warning glossary explaining battery turtle mode and thermal alerts',
      'Offline-accessible roadside emergency procedures when travelling through remote hill country',
    ],
  },
  {
    id: 'home',
    tabNum: '07',
    tabLabel: 'Zero-Hardware',
    icon: Smartphone,
    sprint: 'Offline Ready',
    pill: 'Accessible to All Drivers',
    title: 'Zero Dongles Required. Complete Offline Readiness.',
    desc: 'No expensive OBD-II adapters or paid hardware subscriptions needed. Enjoy full functionality on any modern phone, even when driving through remote mountain passes with zero cellular signal.',
    capabilities: [
      'Works seamlessly on Android and iOS devices with zero extra accessories or dongles to purchase',
      'Offline Journey Packs save full routes and map tiles locally for signal dead-zones',
      'Complete trilingual accessibility in English, Sinhala (සිංහල), and Tamil (தமிழ்)',
      'Built-in emergency assistance guide with verified EV towing protocols across Sri Lanka',
    ],
  },
  {
    id: 'hist',
    tabNum: '08',
    tabLabel: '97.7% Accuracy',
    icon: Award,
    sprint: '97.7% Accuracy',
    pill: 'Empirically Tested',
    title: '97.7% Accuracy Tested on Sri Lankan Terrains.',
    desc: 'Rigorously evaluated on real-world routes—from coastal expressways to highland climbs—achieving an average error margin of just 2.3% on arrival battery estimates.',
    capabilities: [
      'Verified 97.7% prediction accuracy evaluated on real-world held-out driving trips',
      'Continuous calibration that refines its understanding of your car the more you drive',
      'Trip summary insights comparing predicted arrival battery against actual ending charge',
      'Privacy-first architecture ensuring your driving data remains strictly under your control',
    ],
  },
];

const HIGHLIGHT_STATS = [
  { label: 'Prediction Accuracy', stat: '97.7%', detail: 'Tested across diverse Sri Lankan routes', icon: Award },
  { label: 'Operating Cost Tracking', stat: 'LKR / km', detail: 'Log charging costs & monthly expenses', icon: Wallet },
  { label: 'Offline Independence', stat: '100%', detail: 'Cached maps for zero-signal mountain passes', icon: WifiOff },
  { label: 'Hardware Required', stat: '0 Dongles', detail: 'Runs entirely on your smartphone', icon: Smartphone },
];

export default function Platform() {
  const [activeModule, setActiveModule] = useState(MODULES[0]);

  return (
    <section className="section platform" id="platform">
      <div className="container">
        {/* Section Header */}
        <Reveal style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="platform__badge">
            <Cpu size={14} />
            Built for Sri Lankan Driving Realities
          </div>
          <h2 style={{ maxWidth: 840, margin: '0 auto 14px' }}>
            A Smarter EV Experience, Simplified.
          </h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 680 }}>
            Everything you need for confident electric travel across Sri Lanka — from dynamic hill country range estimation to smart overnight charging savings.
          </p>
        </Reveal>

        {/* Highlights Bar */}
        <div className="platform__pillars" style={{ marginBottom: 36 }}>
          {HIGHLIGHT_STATS.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <Reveal key={idx} className="platform__pillar-card" delay={idx * 40}>
                <div className="platform__pillar-icon">
                  <IconComponent size={22} />
                </div>
                <h4 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{s.stat}</h4>
                <p style={{ fontWeight: 700, color: 'var(--tx)', fontSize: 14, marginBottom: 2 }}>{s.label}</p>
                <p style={{ fontSize: 12.5, color: 'var(--tx2)' }}>{s.detail}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Sleek, Non-Clipping Module Tab Selector */}
        <div className="platform__tabs-wrapper">
          <div className="platform__tabs-container">
            <div className="platform__tabs" role="tablist" aria-label="NexoEV Platform Capabilities">
              {MODULES.map((mod) => {
                const IconComponent = mod.icon;
                const isActive = activeModule.id === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`platform__tab-btn ${isActive ? 'is-active' : ''}`}
                    onClick={(e) => {
                      setActiveModule(mod);
                      e.currentTarget.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                      });
                    }}
                  >
                    <IconComponent size={15} className="platform__tab-icon" />
                    <span>{mod.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clean Interactive Showcase Card (No leaked code, no leaked formulas) */}
        <Reveal className="platform__showcase-card" key={activeModule.id}>
          <div className="platform__showcase-text">
            <div className="platform__module-meta">
              <span className="platform__module-pill">{activeModule.pill}</span>
              <span className="platform__sprint-tag">{activeModule.sprint}</span>
            </div>

            <h3 style={{ fontSize: 'clamp(22px, 3.2vw, 32px)' }}>{activeModule.title}</h3>
            <p className="lead" style={{ fontSize: 16 }}>{activeModule.desc}</p>

            <ul className="platform__capabilities-list">
              {activeModule.capabilities.map((cap) => (
                <li key={cap} className="platform__capability-item">
                  <div className="platform__capability-icon">
                    <Check size={14} />
                  </div>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="platform__showcase-visual">
            <PhoneMockup screen={activeModule.id} floating />
          </div>
        </Reveal>

        {/* Transparent Feasibility Verdicts & Safety Reserve (Direct from FR11, FR12, FR22) */}
        <Reveal className="platform__api-card">
          <div className="platform__api-header">
            <div className="platform__badge" style={{ marginBottom: 10 }}>
              <ShieldCheck size={13} />
              Transparent Decision Support
            </div>
            <h3>Know Before You Leave: 3-Tier Feasibility Verdict</h3>
            <p>
              NexoEV evaluates your starting battery, vehicle efficiency, and road elevation to classify every planned journey into three transparent states with customizable safety reserves.
            </p>
          </div>

          <div className="platform__scope-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            <div className="platform__scope-col in-scope" style={{ padding: 20 }}>
              <div className="platform__scope-badge in-scope">
                ● Likely Feasible
              </div>
              <h4 style={{ fontSize: 20, margin: '8px 0 4px', color: '#2e5910', fontWeight: 700 }}>Safe Arrival Buffer</h4>
              <p style={{ fontSize: 13, color: 'var(--tx2)' }}>Arrival battery comfortably exceeds your configured safety reserve. Safe to depart without en-route charging.</p>
            </div>

            <div className="platform__scope-col" style={{ background: '#fffbeb', borderColor: '#fde68a', padding: 20 }}>
              <div className="platform__scope-badge" style={{ background: '#fef3c7', color: '#92400e' }}>
                ▲ Caution Required
              </div>
              <h4 style={{ fontSize: 20, margin: '8px 0 4px', color: '#b45309', fontWeight: 700 }}>Buffer Warning</h4>
              <p style={{ fontSize: 13, color: 'var(--tx2)' }}>Arrival battery falls close to your safety threshold. NexoEV advises topping up before leaving or driving conservatively.</p>
            </div>

            <div className="platform__scope-col" style={{ background: '#fef2f2', borderColor: '#fecaca', padding: 20 }}>
              <div className="platform__scope-badge" style={{ background: '#fee2e2', color: '#991b1b' }}>
                ■ Stop Recommended
              </div>
              <h4 style={{ fontSize: 20, margin: '8px 0 4px', color: '#b91c1c', fontWeight: 700 }}>En-Route Charging</h4>
              <p style={{ fontSize: 13, color: 'var(--tx2)' }}>Trip energy exceeds available charge. NexoEV suggests dependable charging stops along your route to ensure safe arrival.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
