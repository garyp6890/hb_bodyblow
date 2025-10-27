import { useEffect, useState } from "react";

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [entries, setEntries] = useState<IntersectionObserverEntry[] | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return entries;
}