import { useEffect, useRef, useState } from 'react';

export default function useReveal(threshold = 0.05) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold, rootMargin: '0px 0px -30px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}
