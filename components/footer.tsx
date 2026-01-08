import { LogoIcon, WhatsAppIcon } from "@/public/icons";
import { Linkedin, MailIcon } from "lucide-react";
import FooterAnimation from "./ui/footer-animation";

export default function Footer() {
  return (
    <FooterAnimation>
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between px-4 md:flex-row">
        {/* LEFT SECTION (Logo & Text) */}
        <div className="footer-left mb-6 text-center md:mb-0 md:text-left">
          <a
            className="text-text-dim group/button flex cursor-pointer items-center justify-center gap-3 text-[clamp(30px,3vw,45px)] transition-colors hover:text-black md:justify-start dark:hover:text-white"
            href="#hero"
          >
            <span className="relative overflow-hidden">
              <LogoIcon width={50} />
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
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Designed &amp; Built by Ahmed Yasser (Snow)
          </p>
        </div>

        {/* RIGHT SECTION (Social Icons) */}
        <div className="flex space-x-6">
          <a
            className="footer-icon hover:text-primary transform text-gray-400 transition-colors duration-200 hover:scale-110"
            href="https://www.linkedin.com/in/ahmed-yasser66"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin />
          </a>
          <a
            className="footer-icon hover:text-primary transform text-gray-400 transition-colors duration-200 hover:scale-110"
            href="mailto:contact.ahmedyasser@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">EMail</span>
            <MailIcon />
          </a>
          <a
            className="footer-icon hover:text-primary transform text-gray-400 transition-colors duration-200 hover:scale-110"
            href="https://wa.me/01118551388"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">WhatsApp</span>
            <WhatsAppIcon width={24} />
          </a>
        </div>
      </div>
    </FooterAnimation>
  );
}
