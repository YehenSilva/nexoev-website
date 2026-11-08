import Logo from './Logo.jsx';
import { CONTACT_EMAIL } from '../config.js';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div><Logo /><p>An EV companion for planning journeys, estimating arrival battery and exploring charging options.</p></div>
        <div><h4>Explore</h4><ul><li><a href="#home">Home</a></li><li><a href="#features">Features</a></li><li><a href="#about">About</a></li><li><a href="#faq">FAQ</a></li></ul></div>
        <div><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms and Conditions</a></li></ul></div>
        <div><h4>Contact</h4><ul><li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li><li>Contact details to be confirmed</li></ul></div>
      </div>
      <div className="container footer__copy">© {new Date().getFullYear()} NexoEV. Predictions are estimates, not guarantees. Figures shown are sample data.</div>
    </footer>
  );
}
