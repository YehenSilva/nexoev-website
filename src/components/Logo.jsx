export default function Logo({ size = 34, onNavigate }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      aria-label="NexoEV home"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 21, letterSpacing: '-.02em' }}
    >
      <img src="/logo-mark.png" alt="" width={size} height={size} />
      NexoEV
    </a>
  );
}
