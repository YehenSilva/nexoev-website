// Recreated NexoEV app screens - Driver-facing, high-level, and clean
const NavTabs = ({ active }) => (
  <div className="scr-tabs">
    {['Dashboard', 'Trips', 'Chargers', 'Expenses & Stats'].map((t, i) => (
      <span key={t} className={i === active ? 'on' : ''}>{t}</span>
    ))}
  </div>
);

const Card = ({ label, value, accent, smallText }) => (
  <div className={`scr-card ${accent ? 'accent' : ''}`}>
    <small>{label}</small>
    <b>{value}</b>
    {smallText && <div className="scr-subtext">{smallText}</div>}
  </div>
);

const SCREENS = {
  // Screen 1: Vehicle Profile & Energy Status
  home: () => (
    <>
      <div className="scr-header-row">
        <h4>My Vehicle</h4>
        <span className="scr-pill">Active Garage</span>
      </div>
      <div className="scr-card">
        <div className="scr-row" style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
          <small>Current EV Profile</small>
          <span style={{ fontSize: 9.5, color: '#B8F36B' }}>● Ready</span>
        </div>
        <b style={{ fontSize: 15 }}>Tesla Model 3 (Standard RWD)</b>
        <div className="scr-subtext">60 kWh Battery · 16 kWh/100 km Rated</div>
      </div>
      <div className="scr-card">
        <div className="scr-row" style={{ justifyContent: 'space-between' }}>
          <small>Current Battery Level</small>
          <span style={{ fontSize: 9.5, color: '#B8F36B' }}>41.2 kWh Energy</span>
        </div>
        <b className="big">70%</b>
        <div className="scr-bar"><i style={{ width: '70%' }} /></div>
        <div className="scr-subtext" style={{ marginTop: 4 }}>
          Estimated Range: <strong>≈ 262 km</strong>
        </div>
      </div>
      <div className="scr-row">
        <Card label="Safety Reserve" value="20%" smallText="Driver threshold" />
        <Card label="Vehicle Mass" value="1,760 kg" smallText="Configured kerb" />
      </div>
      <NavTabs active={0} />
    </>
  ),

  // Screen 2: Pre-Trip Planning
  trip: () => (
    <>
      <div className="scr-header-row">
        <h4>Trip Planner</h4>
        <span className="scr-pill">Pre-Trip Form</span>
      </div>
      <Card
        label="Destination / Corridor"
        value="Colombo → Ella (205 km)"
        smallText="Via Kadugannawa & Ramboda Pass"
      />
      <div className="scr-row">
        <Card label="Start Battery" value="70%" />
        <Card label="Target Reserve" value="20%" accent />
      </div>
      <div className="scr-row">
        <Card label="Passengers" value="2 Persons" smallText="Cabin payload" />
        <Card label="Climate Control" value="Normal AC" smallText="Active comfort" />
      </div>
      <div className="scr-row">
        <Card label="Hill Profile" value="Highland Climb" smallText="Ascent factored" />
        <Card label="Weather Guard" value="Monitoring" smallText="Active alerts" />
      </div>
      <NavTabs active={1} />
    </>
  ),

  // Screen 3: Feasibility Verdict
  ring: () => (
    <>
      <div className="scr-header-row">
        <h4>Feasibility Verdict</h4>
        <span className="scr-pill">● Likely Feasible</span>
      </div>
      <svg className="scr-ring" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="48" fill="none" stroke="#222c39" strokeWidth="10" />
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="#B8F36B"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="115 301"
          transform="rotate(-90 60 60)"
        />
        <text x="60" y="65" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800">38%</text>
      </svg>
      <div className="scr-card accent">
        <small>Arrival Energy Margin</small>
        <b>22.8 kWh Left (38% on Arrival)</b>
        <div className="scr-subtext">Safely exceeds your 20% reserve goal</div>
      </div>
      <div className="scr-row">
        <Card label="Planned Route" value="205 km" />
        <Card label="Remaining Range" value="≈ 142 km" smallText="After destination" />
      </div>
      <NavTabs active={1} />
    </>
  ),

  // Screen 4: Verified Station Finder & Smart Stops
  map: () => (
    <>
      <div className="scr-header-row">
        <h4>Charging Finder</h4>
        <span className="scr-pill">Recommended</span>
      </div>
      <div className="scr-map">
        <i style={{ left: '30%', top: '35%' }} title="Kegalle Fast Hub" />
        <i style={{ left: '65%', top: '55%' }} title="Peradeniya Station" />
        <i style={{ left: '80%', top: '24%' }} title="Nuwara Eliya Hub" />
      </div>
      <div className="scr-card accent">
        <div className="scr-row" style={{ justifyContent: 'space-between' }}>
          <small>Fastest Stop · 1.2 km off route</small>
          <span style={{ fontSize: 9.5, color: '#B8F36B' }}>● Verified Working</span>
        </div>
        <b>Kegalle Highway Fast Hub</b>
        <div className="scr-subtext">50 kW CCS2 · 18 min stop to reach 80%</div>
      </div>
      <Card label="Alternative Stop" value="Peradeniya Hub · 22 kW Type 2" smallText="4.2 km detour" />
      <NavTabs active={2} />
    </>
  ),

  // Screen 5: EV Journey Expense Tracker
  expense: () => (
    <>
      <div className="scr-header-row">
        <h4>Expense Tracker</h4>
        <span className="scr-pill">Monthly Costs</span>
      </div>
      <div className="scr-card accent">
        <small>November Total Charging</small>
        <b className="big" style={{ fontSize: 20 }}>LKR 14,850</b>
        <div className="scr-subtext">12 charging sessions · 184 kWh energy added</div>
      </div>
      <div className="scr-row">
        <Card label="Avg Running Cost" value="LKR 11.20 / km" smallText="Electric efficiency" />
        <Card label="Petrol Savings" value="~LKR 33,350" smallText="vs petrol equiv." accent />
      </div>
      <Card
        label="Latest Logged Session"
        value="LKR 1,840 · 24.5 kWh"
        smallText="Kegalle Fast Hub · 18 min charge"
      />
      <NavTabs active={3} />
    </>
  ),
  tariff: () => SCREENS.expense(),

  // Screen 6: Mountain Hazard Watch
  hazard: () => (
    <>
      <div className="scr-header-row">
        <h4>Highland Hazard Watch</h4>
        <span className="scr-pill" style={{ background: 'rgba(254,44,85,0.2)', color: '#FE2C55' }}>Advisory</span>
      </div>
      <div className="scr-card" style={{ borderColor: 'rgba(254,44,85,0.4)' }}>
        <small style={{ color: '#FF7B93' }}>⚠️ Active Weather & Landslide Watch</small>
        <b>Kadugannawa Mountain Pass</b>
        <div className="scr-subtext">Moderate rainfall alert active on corridor</div>
      </div>
      <div className="scr-row">
        <Card label="Route Status" value="Pass Open" smallText="Drive with care" />
        <Card label="Safety Buffer" value="Active" smallText="Extra reserve kept" accent />
      </div>
      <NavTabs active={1} />
    </>
  ),

  // Screen 7: Real-World Accuracy
  hist: () => (
    <>
      <div className="scr-header-row">
        <h4>Accuracy & Insights</h4>
        <span className="scr-pill">97.7% Accuracy</span>
      </div>
      <div className="scr-card accent">
        <small>Tested on Sri Lankan Roads</small>
        <b className="big" style={{ fontSize: 20 }}>97.7% Accuracy</b>
        <div className="scr-subtext">Average variance of just 2.3% on test journeys</div>
      </div>
      <div className="scr-row">
        <Card label="Predicted Battery" value="38% SOC" />
        <Card label="Actual Arrival" value="36% SOC" smallText="Within 2% variance" />
      </div>
      <Card
        label="Trip Outcome"
        value="Arrived Safely with Reserve"
        smallText="Continuous self-calibration updated"
      />
      <NavTabs active={3} />
    </>
  ),

  // Screen 8: Shareable Journey Brief (FR27)
  share: () => (
    <>
      <div className="scr-header-row">
        <h4>Journey Brief</h4>
        <span className="scr-pill" style={{ background: 'rgba(184,243,107,0.2)', color: '#B8F36B' }}>● Live Link</span>
      </div>
      <div className="scr-card accent">
        <small>Shared Journey Plan</small>
        <b style={{ fontSize: 15 }}>Colombo → Ella (205 km)</b>
        <div className="scr-subtext">Arrival Battery: 38% · Reserve Buffer Safe</div>
      </div>
      <div className="scr-card" style={{ borderColor: 'rgba(184,243,107,0.3)' }}>
        <small>Secure Shareable Link</small>
        <div style={{ fontSize: 11, color: '#B8F36B', fontFamily: 'monospace', margin: '4px 0' }}>
          nexoev.app/j/colombo-ella-7b9x
        </div>
        <div className="scr-subtext">Family &amp; friends see live ETA &amp; charging stop</div>
      </div>
      <div className="scr-row">
        <Card label="Charging Stop" value="Kegalle Hub" smallText="18 min charge" />
        <Card label="Safety Buffer" value="Intact" smallText="20% reserve" accent />
      </div>
      <NavTabs active={1} />
    </>
  ),

  // Screen 9: Personal Journey Templates (FR29)
  template: () => (
    <>
      <div className="scr-header-row">
        <h4>Journey Templates</h4>
        <span className="scr-pill">Quick Replan</span>
      </div>
      <div className="scr-card accent">
        <div className="scr-row" style={{ justifyContent: 'space-between' }}>
          <small>Template 01 · Frequent Commute</small>
          <span style={{ fontSize: 9.5, color: '#B8F36B' }}>1-Tap Plan</span>
        </div>
        <b style={{ fontSize: 15 }}>Colombo ⇄ Kandy Route</b>
        <div className="scr-subtext">115 km · Via Kadugannawa · 75% Start SOC</div>
      </div>
      <div className="scr-card">
        <div className="scr-row" style={{ justifyContent: 'space-between' }}>
          <small>Template 02 · Express Run</small>
          <span style={{ fontSize: 9.5, color: '#aaa' }}>128 km</span>
        </div>
        <b style={{ fontSize: 15 }}>Colombo → Galle Expressway</b>
        <div className="scr-subtext">Direct route · 0 stops required</div>
      </div>
      <div className="scr-row">
        <Card label="Templates" value="4 Saved" smallText="Auto-recalculates" />
        <Card label="Weather Sync" value="Live" smallText="Today's climate" accent />
      </div>
      <NavTabs active={1} />
    </>
  ),

  // Screen 10: Multilingual EV Assistance Centre (FR28)
  assist: () => (
    <>
      <div className="scr-header-row">
        <h4>EV Assistance</h4>
        <span className="scr-pill">Trilingual</span>
      </div>
      <div className="scr-row" style={{ gap: 4, marginBottom: 8 }}>
        <span style={{ padding: '3px 8px', borderRadius: 6, fontSize: 9.5, fontWeight: 700, background: '#B8F36B', color: '#111' }}>English</span>
        <span style={{ padding: '3px 8px', borderRadius: 6, fontSize: 9.5, fontWeight: 700, background: '#1c2430', color: '#ccc' }}>සිංහල</span>
        <span style={{ padding: '3px 8px', borderRadius: 6, fontSize: 9.5, fontWeight: 700, background: '#1c2430', color: '#ccc' }}>தமிழ்</span>
      </div>
      <div className="scr-card accent" style={{ borderColor: 'rgba(254,44,85,0.4)' }}>
        <small style={{ color: '#FF7B93' }}>⚠️ Roadside Towing Protocol</small>
        <b>Flatbed Towing Only</b>
        <div className="scr-subtext">Never tow with driven wheels on ground to prevent motor damage</div>
      </div>
      <div className="scr-card">
        <small>Dashboard Warning Glossary</small>
        <b>Turtle Mode (ක්‍රමික අවම බල ප්‍රකාරය)</b>
        <div className="scr-subtext">Battery reserve depleted; safe pull-over power remaining</div>
      </div>
      <NavTabs active={0} />
    </>
  ),
};

export default SCREENS;
