import { useEffect, useRef } from 'react';
import svgUrl from './nexoev-journey.svg';

/**
 * Animated NexoEV journey graphic.
 * Uses <object> so the SVG's own SMIL/CSS animation runs (no JS animation loop = very light).
 * Pauses automatically when the user prefers reduced motion.
 */
export default function NexoJourneyHero({ className = '', style }) {
  const ref = useRef(null);

  useEffect(() => {
    let unmounted = false;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      try {
        if (unmounted) return;
        const svg = ref.current?.contentDocument?.documentElement;
        if (!svg?.pauseAnimations) return;
        if (mq.matches) {
          svg.pauseAnimations();
          svg.setCurrentTime(8.5); // freeze on the "arrived" frame
        } else {
          svg.unpauseAnimations();
        }
      } catch {
        // cross-document / security policy fallback
      }
    };

    const el = ref.current;
    el?.addEventListener('load', apply);
    mq.addEventListener('change', apply);
    apply();

    return () => {
      unmounted = true;
      el?.removeEventListener('load', apply);
      mq.removeEventListener('change', apply);
    };
  }, []);

  return (
    <object
      ref={ref}
      data={svgUrl || '/nexoev-journey.svg'}
      type="image/svg+xml"
      aria-label="NexoEV trip animation"
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block', ...style }}
    >
      <img
        src="/nexoev-journey.svg"
        alt="NexoEV trip animation"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </object>
  );
}

