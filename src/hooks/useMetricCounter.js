import { useEffect, useRef, useState } from "react";
import { useCountUp } from "./useCountUp";

export function useMetricCounter(target, suffix) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const display = useCountUp(target, suffix, inView);
  return { ref, display };
}
