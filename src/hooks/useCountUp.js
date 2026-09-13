import { useEffect, useRef, useState } from "react";

export function useCountUp(target, suffix = "%", enabled = false, duration = 900) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, enabled, duration]);

  return `${value}${suffix}`;
}
