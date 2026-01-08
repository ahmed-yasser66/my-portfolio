"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 1. Import ScrollTrigger
import { useGSAP } from "@gsap/react";

// 2. Register the plugin
gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealText({ children, delay = 0, className = "" }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the wrapper (the trigger)
  const textRef = useRef<HTMLSpanElement>(null); // Ref for the text (the target)

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { 
        y: 100, 
        opacity: 0 
      }, 
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: delay,
        ease: "power4.out",
        // 3. Add ScrollTrigger configuration
        scrollTrigger: {
          trigger: containerRef.current, // Use the wrapper as the trigger
          start: "top 85%", // Animation starts when top of element hits 85% of viewport height
          toggleActions: "play none none reverse", // Play when entering, reverse when leaving
        }
      }
    );
  }, { scope: containerRef, dependencies: [delay] });

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden inline-block ${className}`}
    >
      <span ref={textRef} className="inline-block opacity-[0.001]">
        {children}
      </span>
    </div>
  );
}