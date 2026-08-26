import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `target` over `duration` ms once `start` becomes true.
 * Eases out with cubic easing. Respects prefers-reduced-motion.
 */
export function useCountUp(target: number, start: boolean, duration = 1200): number {
  const [value, setValue] = useState(0);
  const raf = useRef<number>();

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [start, target, duration]);

  return value;
}
