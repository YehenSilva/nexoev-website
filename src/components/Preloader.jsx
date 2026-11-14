import { useEffect, useState } from 'react';
import '../styles/Preloader.css';

export default function Preloader() {
  const [isDone, setIsDone] = useState(() => {
    try {
      return Boolean(sessionStorage.getItem('nexo_preloader_seen'));
    } catch {
      return false;
    }
  });
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  const dismiss = () => {
    setIsExiting(true);
    setTimeout(() => setIsDone(true), 250);
  };

  useEffect(() => {
    if (isDone) return;

    try {
      sessionStorage.setItem('nexo_preloader_seen', '1');
    } catch {
      // ignore
    }

    const startTime = performance.now();
    const duration = 800; // Snappy 0.8s intro

    let frameId;
    const tick = (now) => {
      const elapsed = now - startTime;
      const frac = Math.min(elapsed / duration, 1);
      setProgress(Math.round(frac * 100));

      if (frac < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setIsExiting(true);
        setTimeout(() => setIsDone(true), 300);
      }
    };
    frameId = requestAnimationFrame(tick);

    // Guaranteed fallback dismissal (1000ms max)
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsDone(true), 250);
    }, 1000);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDone]);

  if (isDone) return null;

  return (
    <div
      className={`preloader ${isExiting ? 'preloader--exiting' : ''}`}
      onClick={dismiss}
      role="status"
      aria-label="Loading NexoEV"
    >
      <div className="preloader__content" onClick={(e) => e.stopPropagation()}>
        <div className="preloader__ring-wrapper">
          <div className="preloader__spinner-ring" />
          <div className="preloader__logo-circle">
            <img src="/logo-mark.png" alt="NexoEV" width={32} height={32} />
          </div>
        </div>

        <span className="preloader__brand">NexoEV</span>

        <div className="preloader__track">
          <div className="preloader__bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
