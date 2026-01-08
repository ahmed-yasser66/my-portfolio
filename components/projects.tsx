import { ArrowRight, GithubIcon } from "lucide-react";
import Image from "next/image";
import ProjectCard from "./ui/projectCard";
import RevealText from "./ui/RevealText";

export default function Projects() {
  const projectsList = [
    {
      name: "Eshop E-commerce",
      imgUrl: "/images/eshop.webp",
      description:
        "A fast and intuitive e-commerce platform with seamless shopping experience. Features product browsing, detailed views, and streamlined checkout process with mobile-first design.",
      demoUrl: "https://eshop-ecommerce-eight.vercel.app",
      repoUrl: "https://github.com/ahmed-yasser66/eshop-ecommerce",
      stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "Axios"],
      background: "#824aff",
    },
    {
      name: "MovieMaze",
      imgUrl: "/images/moviemaze.webp",
      description:
        "Comprehensive movie and TV series discovery platform. Explore detailed information, cast details, ratings, and trailers with intelligent recommendations and lightning-fast search.",
      demoUrl: "https://movie-maze-gamma.vercel.app",
      repoUrl: "https://github.com/ahmed-yasser66/movie-maze",
      stack: ["React.js", "Tailwind CSS", "Axios", "Swiper.js"],
      background: "#1d4ed8",
    },
    {
      name: "GYMLY",
      imgUrl: "/images/gymly.webp",
      description:
        "Fitness platform featuring comprehensive exercise library with detailed instructions and muscle targeting. Structured workout plans for all skill levels.",
      demoUrl: "https://gymly-one.vercel.app",
      repoUrl: "https://github.com/ahmed-yasser66/gymly",
      stack: ["Next.js", "Tailwind CSS", "GSAP", "Swiper.js"],
      background: "#fdc700",
    },
    {
      name: "Personal Portfolio",
      imgUrl: "/images/portfolio.webp",
      description:
        "Modern portfolio website showcasing projects and skills with smooth animations and interactive elements. Built with performance and user experience in mind.",
      demoUrl: "https://ahmed-yasser.vercel.app",
      repoUrl: "https://github.com/ahmed-yasser66/portfolio",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
      background: "#e1e1e1",
    },
  ] as const;

  return (
    <section
      className="bg-background-light dark:bg-background-dark relative scroll-m-20 py-24"
      id="projects"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <RevealText className="font-display pointer-events-none absolute z-0 -mt-20 -ml-4 text-5xl font-bold text-gray-200 select-none md:text-7xl dark:text-[#666]">
              WORK
            </RevealText>
            <RevealText>
              <h3 className="relative [font-family:var(--font-syne)] text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Selected Projects
              </h3>
            </RevealText>
          </div>
        </div>
        <div >
          {projectsList.map((project, idx) => (
            <ProjectCard project={project} key={project.name} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
