import { useEffect, useState } from "react";

export function useScrollPosition(throttleMs = 100) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = window.setTimeout(() => {
        setScrollPosition(window.scrollY);
        timeoutId = 0;
      }, throttleMs);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [throttleMs]);

  return scrollPosition;
}