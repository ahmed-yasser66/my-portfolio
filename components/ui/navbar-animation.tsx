"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavbarAnimationProps {
  children: ReactNode;
  delay?: number; // Delay before navbar animates (in seconds)
}

export default function NavbarAnimation({
  children,
  delay = 3,
}: NavbarAnimationProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Set initial state and performance hints
      gsap.set(navRef.current, {
        y: -30,
        opacity: 0,
        willChange: "transform, opacity",
      });

      // Animate navbar in
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: delay,
        force3D: true,
        onComplete: () => {
          // Clear will-change after animation
          gsap.set(navRef.current, { willChange: "auto" });
        },
      });
    },
    { scope: navRef, dependencies: [delay] },
  );

  return (
    <nav
      className="navbar opacity-[0.001] bg-background-light/80 dark:bg-background-dark/80 fixed top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md dark:border-gray-800"
      ref={navRef}
      style={{
        // Hardware acceleration hints
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </nav>
  );
}
