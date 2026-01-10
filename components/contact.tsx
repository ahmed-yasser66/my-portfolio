import { DeepWorkIllustration, GithubIcon, WhatsAppIcon } from "@/public/icons";

import { Linkedin, MailIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import ContactAnimation from "./ui/contact-animation";

export default function Contact() {
  const activeList = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];

  return (
    <ContactAnimation>
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Header Section */}
        <h2 className="contact-title mb-4 [font-family:var(--font-syne)] text-3xl font-bold opacity-[0.001] md:text-5xl">
          Want to see all projects?
        </h2>
        <p className="contact-desc mx-auto mb-10 max-w-xl text-gray-500 opacity-[0.001] dark:text-gray-400">
          Check out my code repositories and contribution graph on GitHub. I'm
          always building something new.
        </p>

        {/* --- GitHub Chart Section (Desktop) --- */}
        <a
          href="https://github.com/ahmed-yasser66"
          target="_blank"
          className="githubChart group mx-auto mb-10 hidden w-[820px] lg:block"
        >
          {/* Months Labels */}
          <div className="contact-desc dates text-text-dim mb-2 flex justify-between text-sm opacity-[0.001]">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* THE GRID */}
          <div className="github-grid mt-4 flex flex-wrap gap-[5px]">
            {Array.from({ length: 365 }).map((_, i) => (
              <div
                key={i}
                className={activeList.includes(i) ? "box active" : "box"}
              />
            ))}
          </div>

          <p className="github-label mt-10 text-[6vw] font-bold tracking-widest text-[#666] opacity-[0.001]">
            ON GITHUB
          </p>
        </a>

        {/* --- Mobile GitHub Fallback --- */}
        <div className="flex flex-col items-center gap-5 text-center text-3xl text-[#555] lg:hidden">
          <a
            href="https://github.com/ahmed-yasser66"
            target="_blank"
            className="contact-title flex items-center gap-3 text-black opacity-[0.001] dark:text-white"
          >
            <GithubIcon width={60} />
            <span className="text-text-dim"> /ahmed-yasser66 </span>
          </a>
          <h2 className="contact-desc opacity-[0.001]">Find Me on Github</h2>
        </div>

        {/* --- Divider --- */}
        <div
          className="contact-desc text-text-dim/50 relative flex items-center justify-center gap-4 py-8 opacity-[0.001] max-lg:mt-10"
          aria-hidden
        >
          <div className="h-px w-24 bg-gray-300 dark:bg-gray-700"></div>
          OR
          <div className="h-px w-24 bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* --- Social Icons --- */}
        <div className="relative mt-10 flex justify-center space-x-6">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 text-7xl font-bold text-nowrap opacity-5 select-none lg:text-[7vw] dark:text-white"
            aria-hidden
          >
            Contact Me
          </div>

          <Tooltip>
            <TooltipTrigger>
              <a
                className="social-btn hover:text-primary block transform text-gray-400 opacity-[0.001] transition-colors duration-200 hover:scale-110"
                href="https://wa.me/201118551388"
                target="_blank"
                aria-label="whatsapp"
              >
                <WhatsAppIcon width={50} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Via Whatsapp</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a
                className="social-btn hover:text-primary block transform text-gray-400 opacity-[0.001] transition-colors duration-200 hover:scale-110"
                href="mailto:contact.ahmedyasser@gmail.com"
                target="_blank"
                aria-label="email"
              >
                <MailIcon size={50} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Via Email Address</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a
                className="social-btn hover:text-primary block transform text-gray-400 opacity-[0.001] transition-colors duration-200 hover:scale-110"
                href="https://www.linkedin.com/in/ahmed-yasser66"
                target="_blank"
                aria-label="linkedin"
              >
                <Linkedin size={50} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Via Linkedin</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* --- Illustration --- */}
        <span className="contact-illustration w-full justify-start mt-12 hidden translate-y-5 opacity-[0.001] lg:flex">
          <DeepWorkIllustration width={400} />
        </span>
      </div>
    </ContactAnimation>
  );
}
