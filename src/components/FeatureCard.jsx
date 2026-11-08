import Reveal from './Reveal.jsx';

export default function FeatureCard({ Icon, title, text, delay = 0 }) {
  return (
    <Reveal className="feature-card" delay={delay}>
      <span className="feature-card__icon"><Icon size={26} strokeWidth={1.8} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  );
}
