"use client";

import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
