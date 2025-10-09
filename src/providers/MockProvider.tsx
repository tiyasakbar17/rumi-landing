"use client";

import { useEffect, useRef } from "react";

/**
 * MockProvider starts MSW in development to mock API requests.
 * It is a no-op in production builds.
 */
export default function MockProvider({ children }: { children: React.ReactNode }) {
  const startedRef = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    if (startedRef.current) return;
    startedRef.current = true;

    // Dynamically import to avoid bundling in production
    import("@/mocks/browser").then(({ worker }) => {
      worker.start({ onUnhandledRequest: "bypass" });
    });
  }, []);

  return <>{children}</>;
}
