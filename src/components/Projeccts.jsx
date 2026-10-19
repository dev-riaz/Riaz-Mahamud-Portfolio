"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Recipe Hub",
    image: "/RecipeHub_ Good Food, Good Mood.png",
    link: "https://assignment10-client-site.vercel.app/",
  },
  {
    title: "DocAppoint",
    image: "/DocAppoint_ Your Health, Our Priority.png",
    link: "https://assignment-9-client-site-kappa.vercel.app/",
  },
  {
    title: "Qurbanir Hat",
    image: "/QurbaniHat_ Find Your Perfect Animal.png",
    link: "https://my-assignment-8-chi.vercel.app/",
  },
  {
    title: "KeenKeeper",
    image: "/KeenKeeper Friendship Network.png",
    link: "https://assignment-7-nine-black.vercel.app/",
  },
  {
    title: "Working.....",
    image: "/Modern Dashboard Analytics Banner.png",
    link: "#",
  },
  {
    title: "Working...",
    image: "/LiveChat Real-Time Conversations.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-white/5 bg-[#1b2433] px-5 py-16 sm:px-8 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="mb-12 text-xl font-bold text-white sm:text-2xl md:text-4xl">
          My <span className="text-[#e5e5e5]">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] p-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
              aria-label={`View ${project.title}`}
              className="group relative block aspect-[1.55/1] overflow-hidden rounded-lg text-[#e5e5e5]"
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
              <div className="absolute inset-0 transition-colors duration-300 " />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="translate-y-3 text-center text-base font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                  {project.title}
                </h3>

                <FaExternalLinkAlt className="translate-y-3 text-xl  transition-transform duration-300 group-hover:translate-y-0" />
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
