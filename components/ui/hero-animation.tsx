"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const floatingTweensRef = useRef<gsap.core.Tween[]>([]);

  useGSAP(
    () => {
      // Performance: Set will-change only during animation
      gsap.set(".grid-item, .hero-image-container, .float-item, .giant-hi, .hero-content, .hero-btn, .bottom-section", { 
        willChange: "transform, opacity" 
      });

      const tl = gsap.timeline({
        onComplete: () => {
          // Clear will-change for non-floating elements after entrance
          gsap.set(".grid-item, .hero-image-container, .giant-hi, .hero-content, .hero-btn, .bottom-section", { 
            willChange: "auto" 
          });
        }
      });
      
      tlRef.current = tl;

      const gridItems = gsap.utils.toArray<HTMLElement>(".grid-item");
      const contentElements = gsap.utils.toArray<HTMLElement>(".hero-content");
      const buttons = gsap.utils.toArray<HTMLElement>(".hero-btn");
      const floatingShapes = gsap.utils.toArray<HTMLElement>(".float-item");

      // ENTRANCE ANIMATIONS - Optimized
      tl.fromTo(
          gridItems,
          { scale: 4, opacity: 0 },
          {
            scale: 1,
            opacity: 0.15,
            duration: 1.5,
            ease: "power4.out",
            force3D: true,
            stagger: { 
              amount: 0.5, 
              grid: "auto", 
              from: "center" 
            },
          },
        )
        .fromTo(
          ".giant-hi",
          { scale: 1.5, opacity: 0 },
          { 
            scale: 1, 
            opacity: 0.8, 
            duration: 1.5, 
            ease: "power3.out", 
            force3D: true 
          },
          "-=1.2",
        )
        .fromTo(
          contentElements,
          { y: 40, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.1, 
            ease: "power3.out", 
            force3D: true 
          },
          "-=1",
        )
        .fromTo(
          buttons,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
            force3D: true,
          },
          "-=0.8",
        )
        .fromTo(
          ".hero-image-container",
          { x: 50, opacity: 0, scale: 0.9 },
          { 
            x: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1, 
            ease: "power3.out", 
            force3D: true 
          },
          "-=1",
        )
        .fromTo(
          ".bottom-section",
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power2.out", 
            force3D: true 
          },
          "-=0.5",
        );

      // FLOATING ANIMATIONS - Performance optimized with proper cleanup
      const floatingMain = gsap.to(".floating-main", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
        force3D: true,
        paused: true, // Start paused, let ScrollTrigger control
      });

      const floatingShapesAnim = gsap.to(floatingShapes, {
        y: (i) => -15 - i * 5,
        rotation: 10,
        duration: (i) => 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
        force3D: true,
        paused: true, // Start paused
      });

      floatingTweensRef.current = [floatingMain, floatingShapesAnim];

      // ScrollTrigger to pause/resume based on visibility
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          floatingMain.play();
          floatingShapesAnim.play();
        },
        onLeave: () => {
          floatingMain.pause();
          floatingShapesAnim.pause();
        },
        onEnterBack: () => {
          floatingMain.play();
          floatingShapesAnim.play();
        },
        onLeaveBack: () => {
          floatingMain.pause();
          floatingShapesAnim.pause();
        },
      });

      // Use Intersection Observer as backup for better battery performance
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                // Extra safety: kill animations when not visible
                floatingMain.pause();
                floatingShapesAnim.pause();
              }
            });
          },
          { threshold: 0 }
        );

        if (containerRef.current) {
          observer.observe(containerRef.current);
        }

        // Cleanup observer
        return () => observer.disconnect();
      }
    },
    { scope: containerRef, dependencies: [] },
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Kill all floating animations
      floatingTweensRef.current.forEach(tween => tween?.kill());
      tlRef.current?.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="will-change-transform"
      style={{ 
        // Hardware acceleration hint
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      {children}
    </div>
  );
}