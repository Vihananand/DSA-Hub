"use client";

import { ReactLenis, useLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  // Optional: listen to scroll updates
  useLenis((lenis) => {
    // called every scroll
    // console.log(lenis.scroll)
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
