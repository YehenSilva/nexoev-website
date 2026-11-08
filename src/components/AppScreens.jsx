// Recreated NexoEV app screens. Sample figures: 60 kWh usable, 70% start, 16 kWh/100 km, 80 km trip.
const NavTabs = ({ active }) => (
  <div className="scr-tabs">
    {['Home', 'Trips', 'Charge', 'History'].map((t, i) => <span key={t} className={i === active ? 'on' : ''}>{t}</span>)}
  </div>
);
const Card = ({ label, value, accent }) => (
  <div className={`scr-card ${accent ? 'accent' : ''}`}><small>{label}</small><b>{value}</b></div>
);

const SCREENS = {
  home: () => (<>
    <h4>My EV</h4>
    <div className="scr-card"><small>Battery</small><b className="big">70%</b><div className="scr-bar"><i style={{ width: '70%' }} /></div></div>
    <div className="scr-row"><Card label="Est. range" value="262 km" /><Card label="Capacity" value="60 kWh" /></div>
    <Card label="Consumption" value="16 kWh/100 km" />
    <span className="scr-pill">Sample data</span><NavTabs active={0} />
  </>),
  trip: () => (<>
    <h4>Plan a trip</h4>
    <Card label="Destination" value="Sample destination" />
    <div className="scr-row"><Card label="Start battery" value="70%" /><Card label="Arrival reserve" value="20%" /></div>
    <Card label="Distance" value="80 km" />
    <Card label="Est. energy" value="12.8 kWh" />
    <Card label="Est. arrival battery" value="≈ 49%" accent /><NavTabs active={1} />
  </>),
  ring: () => (<>
    <h4>Arrival estimate</h4>
    <svg className="scr-ring" width="150" height="150" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="none" stroke="#222c39" strokeWidth="10" />
      <circle cx="60" cy="60" r="52" fill="none" stroke="#B8F36B" strokeWidth="10" strokeLinecap="round" strokeDasharray="160 327" transform="rotate(-90 60 60)" />
      <text x="60" y="66" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="800">49%</text>
    </svg>
    <Card label="42 kWh available − 12.8 kWh trip" value="≈ 29.2 kWh left" />
    <span className="scr-pill center">Baseline estimate</span><NavTabs active={1} />
  </>),
  map: () => (<>
    <h4>Charging</h4>
    <div className="scr-map"><i style={{ left: '28%', top: '36%' }} /><i style={{ left: '62%', top: '58%' }} /><i style={{ left: '78%', top: '24%' }} /></div>
    <Card label="2.4 km · CCS2 · 50 kW" value="Sample Station A" />
    <Card label="5.1 km · Type 2 · 22 kW" value="Sample Station B" />
    <span className="scr-pill">Demo data</span><NavTabs active={2} />
  </>),
  hist: () => (<>
    <h4>Insights</h4>
    <div className="scr-card"><small>Predicted vs actual arrival battery</small>
      <div className="scr-hist">{[[52, 48], [40, 44], [63, 58], [35, 36], [58, 50]].map(([p, a], i) => <div key={i}><i style={{ height: `${p}%` }} /><i style={{ height: `${a}%` }} /></div>)}</div></div>
    <Card label="Average error" value="3.6 pts" />
    <span className="scr-pill">Sample data</span><NavTabs active={3} />
  </>),
};
export default SCREENS;
