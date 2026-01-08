"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MagneticButton({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    (context, contextSafe) => {
      // xTo and yTo are super performant for mouse movement
      const xTo = gsap.quickTo(buttonRef.current, "x", {
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(buttonRef.current, "y", {
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });

      const handleMouseMove = contextSafe!((e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
          buttonRef.current!.getBoundingClientRect();

        // Calculate center of button
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Move button towards mouse (divided by 2 for "resistance" effect)
        xTo((clientX - centerX) / 2);
        yTo((clientY - centerY) / 2);
      });

      const handleMouseLeave = contextSafe!(() => {
        // Snap back to center
        xTo(0);
        yTo(0);
      });

      // Add event listeners
      const el = buttonRef.current;
      el?.addEventListener("mousemove", handleMouseMove as any);
      el?.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el?.removeEventListener("mousemove", handleMouseMove as any);
        el?.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: buttonRef },
  );

  return (
    <a
      ref={buttonRef}
      className="hero-btn opacity-[0.001] flex gap-3 items-center group relative overflow-hidden rounded-lg bg-black px-5 py-3 font-bold text-white dark:bg-white dark:text-[#121417]"
      href={href}
    >
      {children}
    </a>
  );
}
