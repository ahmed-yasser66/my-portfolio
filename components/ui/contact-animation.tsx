"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Contact({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Triggers when section is 30% into view
          toggleActions: "play none none reverse",
        },
      });

      // 1. Headlines and Text Reveal
      tl.fromTo(
        [".contact-title", ".contact-desc"],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      )

        // 2. The Digital Wave (GitHub Grid)
        // Animating 365 elements needs performance optimization (will-change)
        .fromTo(
          ".github-grid",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: {
              each: 0.005, // Very fast ripple
              from: "start", // Start from top-left
              grid: "auto",
            },
            ease: "back.out(2)", // Pop effect
          },
          "-=0.4",
        )

        // 3. Reveal the "On Github" text
        .fromTo(
          ".github-label",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=1",
        )

        // 4. Social Icons Elastic Pop
        .fromTo(
          ".social-btn",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "elastic.out(1, 0.4)",
          },
          "-=0.5", // Overlap slightly
        )

        // 5. Illustration Rise
        .fromTo(
          ".contact-illustration",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="scroll-m-20 overflow-hidden border-t border-gray-200 bg-gray-100 pt-20 max-lg:pb-20 dark:border-gray-800 dark:bg-[#0a0a0c]"
      id="contact"
    >
      {children}
    </section>
  );
}
