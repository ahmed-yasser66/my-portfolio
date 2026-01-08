"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function FooterAnimation({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", // Animation starts when top of footer hits 95% of viewport
          toggleActions: "play none none reverse", // Reverses if you scroll up
        },
      });

      // 1. The Container Slide Up
      tl.fromTo(
        footerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      )

        // 2. Logo & Text (Left Side) Slide In
        .fromTo(
          ".footer-left",
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5", // Overlap slightly with container animation
        )

        // 3. Social Icons Pop In (Right Side)
        .fromTo(
          ".footer-icon",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1, // Delay between each icon
            ease: "back.out(1.7)", // Nice "pop" effect
          },
          "-=0.5",
        );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="dark:bg-background-dark border-t border-gray-200 bg-white py-12 opacity-[0.001] will-change-transform dark:border-gray-800" // Start opacity-[0.001] to prevent flash
      id="contact"
    >
      {children}
    </footer>
  );
}
