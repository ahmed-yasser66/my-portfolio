"use client";

import { LogoIcon } from "@/public/icons";
import { ModeToggle } from "./theme-toggler";
import NavbarAnimation from "./ui/navbar-animation";

export default function Navbar() {
  const links = [
    {
      label: "Home",
      href: "hero",
    },
    {
      label: "Projects",
      href: "projects",
    },
    {
      label: "Contact",
      href: "contact",
    },
  ];
  const handleScrollIntoSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <NavbarAnimation>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="group/button shrink-0">
            <span
              className="text-text-dim flex cursor-pointer items-center gap-3 transition-colors hover:text-black dark:hover:text-white"
              onClick={() => handleScrollIntoSection("hero")}
            >
              <span className="relative overflow-hidden">
                <LogoIcon width={45} />
                <div
                  className="absolute inset-0 flex h-full w-full [transform:skew(-13deg)_translateX(-100%)] justify-center group-hover/button:[transform:skew(-13deg)_translateX(100%)] group-hover/button:duration-1000"
                  aria-hidden
                >
                  <div className="relative h-full w-3 bg-white/50"></div>
                </div>
              </span>
              <span className="text-xl font-semibold tracking-wider text-[#45ABE3]">
                Snow
                <span className="text-primary">Coding</span>
              </span>
            </span>
          </div>
          <div className="flex gap-3">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {links.map((link) => (
                  <span
                    className="hover:text-primary/70 cursor-pointer rounded-md px-3 py-2 text-[14.5px] font-medium transition-colors"
                    key={link.label}
                    onClick={() => handleScrollIntoSection(link.href)}
                  >
                    {link.label}
                  </span>
                ))}
                <a
                  className="bg-primary hover:bg-opacity-90 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors dark:bg-white dark:text-[#121317] dark:hover:bg-white/85"
                  href="https://wa.me/01118551388"
                  target="_blank"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </NavbarAnimation>
  );
}
