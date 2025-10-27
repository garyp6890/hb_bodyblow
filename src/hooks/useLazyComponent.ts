import { useEffect, useState } from "react";

export function useLazyComponent<T>(
  factory: () => Promise<{ default: React.ComponentType<T> }>,
  deps: any[] = []
) {
  const [Component, setComponent] = useState<React.ComponentType<T> | null>(null);

  useEffect(() => {
    factory().then((module) => setComponent(() => module.default));
  }, deps);

  return Component;
}