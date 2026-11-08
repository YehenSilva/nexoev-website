import StoreBadges from '../components/StoreBadges.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';
import Reveal from '../components/Reveal.jsx';
import '../styles/DownloadCTA.css';

export default function DownloadCTA() {
  return (
    <section className="section cta" id="download">
      <div className="container">
        <Reveal className="cta__panel">
          <div className="cta__text">
            <img src="/logo.png" alt="NexoEV" width="110" height="128" />
            <h2>Your Next Journey Starts With NexoEV.</h2>
            <p className="lead">Make your electric driving experience smarter, simpler and more informed.</p>
            <StoreBadges />
          </div>
          <div className="cta__phone"><PhoneMockup screen="ring" floating /></div>
        </Reveal>
      </div>
    </section>
  );
}
