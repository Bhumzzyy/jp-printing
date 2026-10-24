"use client";

import { useEffect, useState } from "react";

export default function CurrentYear() {
  // Start with a stable value so static prerendering stays deterministic,
  // then update to the real year once running in the browser.
  const [year, setYear] = useState("2026");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(String(new Date().getFullYear()));
  }, []);

  return <>{year}</>;
}
