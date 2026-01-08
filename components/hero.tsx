import { ArrowRight, GithubIcon } from "lucide-react";
import Image from "next/image";
import MagneticButton from "./ui/MagneticButton";
import HeroAnimation from "./ui/hero-animation";

export default function Hero() {
  return (
    <HeroAnimation>
      <header
        // Changed to flex-col to allow natural stacking of Main Content -> Bottom Section
        className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-white pt-10 md:pt-28 dark:bg-[#0a0a0a]"
        id="hero"
      >
        {/* --- ABSOLUTE BACKGROUNDS (Allowed) --- */}
        <div className="absolute inset-0 flex items-center justify-center max-sm`:-translate-y-16">
          <div
            className="pointer-events-none absolute inset-0 z-0 grid grid-cols-6 content-center justify-items-center gap-4 p-4 md:grid-cols-12"
            style={{ perspective: "1000px" }}
          >
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="grid-item aspect-square w-full rounded-xl bg-gray-400/50 opacity-[0.001] dark:bg-gray-600/70"
              />
            ))}
          </div>
          <div className="giant-hi pointer-events-none absolute inset-0 z-0 w-full transform opacity-[0.001] select-none flex justify-center items-center">
            <h1 className="font-display text-[20rem] leading-none font-bold text-gray-200 sm:text-[30rem] dark:text-neutral-800">
              Hi
            </h1>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center px-4 pb-20 md:flex-row 2xl:px-20">
            {/* Left Text */}
            <div className="z-20 mt-10 text-center md:mt-0 md:w-1/2 md:text-left">
              <div className="hero-content bg-primary mb-6 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase opacity-[0.001] shadow-lg shadow-blue-500/20 dark:bg-[#45abe3] dark:text-black">
                Available for freelance
              </div>
              <h2 className="hero-content font-display mb-6 text-5xl leading-tight font-bold opacity-[0.001] md:text-7xl dark:text-white">
                I'm <span className="text-[#45abe3]">Ahmed</span>,<br />
                Frontend Developer.
              </h2>
              <p className="hero-content mx-auto mb-8 max-w-lg text-lg text-gray-600 opacity-[0.001] md:mx-0 md:text-xl dark:text-gray-400">
                I build accessible, pixel-perfect, performant, and delightful
                web experiences.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <MagneticButton href="#projects">
                  View Work
                  <ArrowRight />
                  <div className="absolute -inset-10 -translate-x-full -skew-x-12 transform bg-white/20 transition-transform duration-500 group-hover:translate-x-0 dark:bg-black/15" />
                </MagneticButton>
                <a
                  className="hero-btn flex items-center gap-2 rounded-lg border border-gray-300 px-8 py-3 font-medium opacity-[0.001] transition-all hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                  href="https://github.com/ahmed-yasser66"
                  target="_blank"
                >
                  <GithubIcon className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>
            {/* Right Image (Static Container, Absolute shapes inside) */}
            <div className="hero-image-container perspective-1000 relative mt-12 flex justify-center opacity-[0.001] md:mt-0 md:w-1/2">
              <div className="floating-main relative h-64 w-64 md:h-96 md:w-96">
                <div className="absolute top-0 right-0 h-full w-full animate-pulse rounded-full bg-gradient-to-tr from-[#45abe3] to-purple-400 opacity-60 blur-3xl" />
                <div className="bg-primary relative size-full rotate-3 overflow-hidden rounded-3xl border-[6px] border-white/20 shadow-2xl transition-transform duration-500 hover:rotate-0">
                  <Image
                    src="/images/pp.webp"
                    alt="Ahmed Yasser"
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="auto"
                  />
                </div>
              </div>
              {/* Floating shapes (Absolute inside the relative container is allowed) */}
              <div className="float-item absolute top-0 right-10 h-16 w-16 rotate-12 rounded-xl border-4 border-[#45abe3]/30 backdrop-blur-sm" />
              <div className="float-item absolute bottom-10 left-10 h-10 w-10 rounded-full bg-[#45abe3]/30 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </header>
      <div className="bottom-section relative z-20 origin-top-left -skew-y-2 transform overflow-hidden bg-[#378ab7] py-12 text-white opacity-[0.001] shadow-xl md:py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto skew-y-2 px-6 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Designing the Future
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-purple-100 md:text-xl">
            Bridging the gap between complex backend logic and beautiful
            frontend interfaces.
          </p>
        </div>
      </div>
    </HeroAnimation>
  );
}
