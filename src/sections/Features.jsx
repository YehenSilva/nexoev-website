import SectionHeading from '../components/SectionHeading.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';
import Reveal from '../components/Reveal.jsx';
import '../styles/Features.css';

const FEATURES = [
  { screen: 'home', kicker: 'Battery Dashboard', title: 'Know Your Battery. Own Your Journey.',
    points: ['Battery percentage and estimated remaining range', 'Vehicle battery capacity and energy consumption', 'Your vehicle information in one place'] },
  { screen: 'trip', kicker: 'Trip Planning', title: 'Every Journey Starts With a Smarter Plan.',
    points: ['Select a destination', 'Enter your starting battery level', 'Choose your desired arrival battery reserve', 'Review trip distance and estimated energy use'] },
  { screen: 'ring', kicker: 'Battery Prediction', title: 'Know What to Expect Before You Drive.',
    points: ['Predicted battery percentage on arrival', 'Estimated energy consumption and remaining range', 'Energy available minus trip energy, explained clearly'],
    note: 'This is a baseline estimate based on vehicle capacity, starting battery, distance and baseline consumption. It is not a guaranteed real-world prediction.' },
  { screen: 'map', kicker: 'Charging Station Discovery', title: 'Explore Your Charging Options.',
    points: ['Charging station information', 'Distance from you', 'Connector types and charging power'],
    note: 'The current app uses demonstration station data. Live availability and real-time charger status are not shown.' },
  { screen: 'hist', kicker: 'Trip History and Insights', title: 'Understand Every Journey Better.',
    points: ['Review previous trips', 'Compare predicted and actual arrival battery', 'See prediction error and trip analytics'],
    note: 'Analytics shown are demonstration data.' },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHeading title="Powerful Features. Simpler Journeys." text="Screens are recreated app views using sample figures." />
        {FEATURES.map((f) => (
          <div className="feature-row" key={f.screen}>
            <Reveal className="feature-row__text">
              <span className="feature-row__kicker">{f.kicker}</span>
              <h2>{f.title}</h2>
              <ul>{f.points.map((p) => <li key={p}>{p}</li>)}</ul>
              {f.note && <div className="note"><strong>Please note: </strong>{f.note}</div>}
            </Reveal>
            <Reveal className="feature-row__visual" delay={120}><PhoneMockup screen={f.screen} /></Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
