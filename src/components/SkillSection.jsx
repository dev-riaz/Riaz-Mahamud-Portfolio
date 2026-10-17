"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaPaintBrush,
  FaImage,
  FaPenNib,
} from "react-icons/fa";

import { FaGlobe, FaCode, FaPaintRoller } from "react-icons/fa";

const services = [
  {
    title: "Web Design",
    icon: FaGlobe,
    description:
      "I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction.",
  },
  {
    title: "Web Development",
    icon: FaCode,
    description:
      "I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction.",
  },
  {
    title: "Graphic Design",
    icon: FaPaintRoller,
    description:
      "I am professional Web designer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction.",
  },
];

import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#1674B8",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#E34F26",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F0DB4F",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "#7952B3",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "#F24E1E",
  },
  {
    name: "Adobe XD",
    icon: FaPenNib,
    color: "#FF61F6",
  },
  {
    name: "Illustrator",
    icon: FaPaintBrush,
    color: "#FF9A00",
  },
  {
    name: "Photoshop",
    icon: FaImage,
    color: "#31A8FF",
  },
];

export default function SkillSection() {
  return (
    <section id="skills" className="min-h-screen bg-black px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#242424] to-[#171717] p-3 shadow-xl sm:p-5">
          <h2 className="mb-6 text-sm font-bold text-white sm:text-base">
            Skills &amp; Technologies
          </h2>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="group flex min-w-0 flex-col items-center justify-center rounded-sm border border-gray-200 bg-white px-1.5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 sm:px-2 sm:py-2"
                >
                  <div className="flex h-12 w-full items-center justify-center">
                    <Icon
                      aria-hidden="true"
                      className="h-9 w-9 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                      style={{ color: skill.color }}
                    />
                  </div>

                  <span className="mt-2 w-full truncate text-center text-[9px] font-bold text-black sm:text-[10px]">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
       
      <section id="services" className="bg-[#303744] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 1;

            return (
              <div
                key={service.title}
                className={`group flex flex-col items-center rounded-lg border px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                  featured
                    ? "border-cyan-400 bg-[#222831]"
                    : "border-transparent bg-[#222831] hover:border-cyan-400"
                }`}
              >
                {/* Icon */}
                <Icon className="mb-5 h-9 w-9 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

                {/* Title */}
                <h3 className="mb-4 text-base font-bold text-cyan-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-[11px] leading-[1.5] text-gray-200">
                  {service.description}
                </p>

                {/* Button */}
                <a
                  href="#contact"
                  className={`w-full max-w-[180px] rounded-full px-4 py-2 text-[10px] font-bold transition-all duration-300 ${
                    featured
                      ? "bg-cyan-400 text-[#222831] hover:bg-cyan-300"
                      : "bg-white text-[#222831] hover:bg-cyan-400"
                  }`}
                >
                  Hire Me
                </a>
              </div>
            );
          })}
        </div>
      </section>
      );
    </section>
  );
}
