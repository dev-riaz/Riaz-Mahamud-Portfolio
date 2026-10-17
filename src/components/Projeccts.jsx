"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Web Design",
    image: "/projects/project-1.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: "/projects/project-2.jpg",
    link: "#",
  },
  {
    title: "Dashboard Design",
    image: "/projects/project-3.jpg",
    link: "#",
  },
  {
    title: "Development Project",
    image: "/projects/project-4.jpg",
    link: "#",
  },
  {
    title: "UI/UX Design",
    image: "/projects/project-5.jpg",
    link: "#",
  },
  {
    title: "Creative Project",
    image: "/projects/project-6.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="border-y border-white/5 bg-[#1f232c] px-5 py-16 sm:px-8 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-xl font-bold text-white sm:text-2xl">
          My <span className="text-cyan-400">Portfolio</span>
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
              aria-label={`View ${project.title}`}
              className="group relative block aspect-[1.55/1] overflow-hidden rounded-lg bg-[#303744]"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-cyan-400/80" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="translate-y-3 text-center text-base font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                  {project.title}
                </h3>

                <FaExternalLinkAlt className="translate-y-3 text-xl text-cyan-300 transition-transform duration-300 group-hover:translate-y-0" />
              </div>

              {/* First Card Label */}
              {index === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-cyan-400/90 via-cyan-400/30 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-sm font-bold text-white">
                    {project.title}
                  </h3>

                  <FaExternalLinkAlt className="text-xl text-cyan-300" />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
