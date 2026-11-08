import Reveal from './Reveal.jsx';

export default function SectionHeading({ title, text, center = true }) {
  const align = center ? 'auto' : '0';
  return (
    <Reveal style={{ textAlign: center ? 'center' : 'left', marginBottom: 56 }}>
      <h2 style={{ maxWidth: 780, margin: `0 ${align}` }}>{title}</h2>
      {text && <p className="lead" style={{ margin: `18px ${align} 0` }}>{text}</p>}
    </Reveal>
  );
}
