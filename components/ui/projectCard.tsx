"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, GithubIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    imgUrl: string;
    stack: readonly string[];
    demoUrl: string;
    repoUrl: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageMaskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 0;

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Starts when top of card is at 80% of viewport
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Image Reveal Animation
      tl.fromTo(
        imageMaskRef.current,
        {
          clipPath: "inset(0% 0% 100% 0%)", // Hidden from bottom
        },
        {
          clipPath: "inset(0% 0% 0% 0%)", // Fully visible
          duration: 1.2,
          ease: "power4.inOut",
        },
      ).from(
        imageRef.current,
        {
          scale: 1, // Start zoomed in
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<", // Run at same time as clipPath
      );

      // 2. Content Stagger Animation
      // We animate the specific elements inside the content div
      const contentElements = contentRef.current?.children;
      if (contentElements) {
        tl.from(
          contentElements,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6", // Start slightly before image finishes
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`group relative mb-32 flex flex-col items-center gap-8 ${
        !isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* --- Image Section --- */}
      <div className="perspective-1000 relative w-full md:w-1/2">
        {/* Background Decorative Blob */}
        <div className="bg-primary/20 absolute inset-0 rotate-3 transform rounded-2xl transition-transform duration-500 will-change-transform group-hover:rotate-6" />

        {/* Mask Wrapper for GSAP Reveal */}
        <div
          ref={imageMaskRef}
          className="dark:bg-surface-dark relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl will-change-[clip-path] dark:border-gray-800"
        >
          <Image
            ref={imageRef}
            alt={project.name}
            className="h-64 w-full rounded-xl object-contain lg:grayscale transition-all duration-500 will-change-transform group-hover:grayscale-0 md:h-80"
            src={project.imgUrl}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMdjtYDwAEiQHzWWXnRgAAAABJRU5ErkJggg=="
          />
        </div>
      </div>

      {/* --- Content Section --- */}
      <div
        ref={contentRef}
        className={`w-full md:w-1/2 ${!isEven ? "md:pr-10" : "md:pl-10"}`}
      >
        <span className="text-primary mb-2 block font-mono text-sm tracking-widest uppercase">
          Project 0{index + 1}
        </span>

        <h4 className="mb-4 [font-family:var(--font-syne)] text-4xl font-bold">
          {project.name}
        </h4>

        <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium dark:bg-gray-800"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 md:justify-start">
          <a
            className="group/link relative overflow-hidden rounded-lg bg-black px-5 py-3 font-bold text-white transition-all hover:scale-105 dark:bg-white dark:text-[#121417]"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowRight className="h-4 w-4" />
            </span>
            <div className="absolute -inset-10 -translate-x-full -skew-x-12 transform bg-white/20 transition-transform duration-500 group-hover/link:translate-x-0 dark:bg-black/15" />
          </a>

          <a
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-8 py-3 font-medium transition-colors hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
