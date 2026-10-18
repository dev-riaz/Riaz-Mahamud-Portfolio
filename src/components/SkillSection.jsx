"use client";

import { motion } from "framer-motion";

import {
  FaCode,
  FaCheckCircle,
  FaArrowRight,
  FaGlobe,
  FaDatabase,
  FaCog,
  FaPenNib,
  FaImage,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const BG = "#1b2433";
const TEXT = "#e5e5e5";

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Illustrator", icon: FaPenNib, color: "#FF9A00" },
  { name: "Photoshop", icon: FaImage, color: "#31A8FF" },
];

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Building modern user interfaces",
    icon: FaLaptopCode,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 & Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Building APIs and server-side apps",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 70 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    subtitle: "Workflow, design and productivity",
    icon: FaTools,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Figma", level: 65 },
      { name: "Responsive Design", level: 90 },
      { name: "Problem Solving", level: 75 },
      { name: "UI Design Basics", level: 70 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function SkillCard({ group, index }) {
  const GroupIcon = group.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] sm:p-6"
    >
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07]">
          <GroupIcon className="text-xl" style={{ color: TEXT }} />
        </div>

        <div>
          <p className="mb-1 text-xs tracking-[0.2em] text-white/40">
            0{index + 1} / SKILLS
          </p>
          <h3 className="text-lg font-semibold" style={{ color: TEXT }}>
            {group.title}
          </h3>
          <p className="mt-1 text-sm text-white/50">{group.subtitle}</p>
        </div>
      </div>

      <div className="space-y-5">
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-sm text-white/80">{skill.name}</span>
              <span className="text-xs text-white/45">{skill.level}%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="h-full rounded-full"
                style={{ backgroundColor: TEXT }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
            <FaCode className="text-sm" />
            <span className="text-xs tracking-[0.2em] text-white/70">
              WHAT I WORK WITH
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills & <span className="text-white/50">Technologies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            The technologies and tools I use to build responsive, accessible,
            and user-friendly web applications.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-white/70" />
        </motion.div>

        {/* Technology icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
        >
          {technologies.map((tech) => {
            const TechIcon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <TechIcon
                  className="shrink-0 text-2xl"
                  style={{ color: tech.color }}
                />
                <span className="text-sm font-medium text-white/80">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Introduction card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:grid-cols-[1.3fr_1fr] md:items-center lg:p-10"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
              <FaGlobe />
              <span>MY TECHNICAL JOURNEY</span>
            </div>

            <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
              Turning ideas into
              <span className="text-white/50"> digital experiences.</span>
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              I enjoy developing modern web applications with React, Next.js,
              Node.js, Express.js, and MongoDB. I focus on responsive layouts,
              clean code, and practical user experiences while continuously
              improving my skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "15+", label: "Technologies", icon: FaCode },
              { value: "3", label: "Skill Categories", icon: FaCog },
              { value: "Full", label: "Stack Learning", icon: FaDatabase },
              { value: "100%", label: "Growth Mindset", icon: FaCheckCircle },
            ].map((item) => {
              const StatIcon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-black/10 p-4"
                >
                  <StatIcon className="mb-3 text-lg text-white/60" />
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="mt-1 text-xs text-white/45 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Skill category cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </motion.div>

        {/* Footer */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row"
        >
          <p className="text-center text-sm text-white/45 sm:text-left">
            Always learning. Always building. Always improving.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Explore My Projects
            <FaArrowRight />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
