export default function Logo({ size = 34 }) {
  return (
    <a href="#home" aria-label="NexoEV home" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 21, letterSpacing: '-.02em' }}>
      <img src="/logo-mark.png" alt="" width={size} height={size} />
      NexoEV
    </a>
  );
}
