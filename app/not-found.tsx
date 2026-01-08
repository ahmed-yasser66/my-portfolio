import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center px-6 text-center min-h-screen bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Radial gradient */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-purple-500/10 via-transparent to-transparent dark:from-purple-500/15" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 z-0 h-16 w-16 rotate-12 rounded-2xl border border-gray-200 dark:border-white/10 opacity-40 md:left-1/4 animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute right-10 bottom-1/4 z-0 h-24 w-24 rounded-full border border-gray-200 dark:border-white/5 opacity-30 md:right-1/4 animate-[float_8s_ease-in-out_infinite_2s]" />
      
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Error badge */}
        <div className="mb-6 inline-block rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400">
          Error 404
        </div>
        
        {/* Large 404 text */}
        <h1 className="mb-2 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-white/50 bg-clip-text text-8xl font-extrabold tracking-tighter text-transparent select-none md:text-9xl">
          404
        </h1>
        
        {/* Heading */}
        <h2 className="mb-6 text-4xl leading-tight font-bold text-gray-900 dark:text-white md:text-5xl">
          Lost in <br className="md:hidden" /> Cyberspace?
        </h2>
        
        {/* Description */}
        <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
          The page you're looking for seems to have vanished into the void. It
          might have been moved, deleted, or never existed.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="group relative flex items-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-8 py-4 text-lg font-bold text-white dark:text-black shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            href="/"
          >
            Back to Home
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
      
      {/* Large background text */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black whitespace-nowrap text-gray-900 dark:text-white opacity-5 dark:opacity-[0.03] select-none">
        OOPS
      </div>
      
    </main>
  );
}