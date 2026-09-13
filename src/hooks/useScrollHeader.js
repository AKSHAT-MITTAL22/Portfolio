import { useEffect, useState } from "react";

export function useScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const syncHeader = () => setIsScrolled(window.scrollY > 10);
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  return isScrolled;
}
