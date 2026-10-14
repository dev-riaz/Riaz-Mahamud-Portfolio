"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaAt,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCode,
  FaFacebook,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { Parallax } from "./ScrollAnimations";

// navContent
const navContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.12,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// social link
const SocialLink = ({ href, label, icon, variants }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      variants={variants}
      className="flex h-9 w-9 items-center justify-center bg-[#c5c5c5] text-xl text-black shadow-md transition hover:-translate-y-1 hover:bg-black hover:text-white rounded-2xl"
    >
      {icon}
    </motion.a>
  );
};

// animation
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const socialContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#portfolio" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden  bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[600px] bg-black lg:h-[543px] lg:min-h-0">
        {/* DESKTOP LEFT PANEL */}
        <div
          className="absolute inset-y-0 left-0 z-10 hidden w-[52%] bg-[#d6d6d6] lg:block"
          style={{
            clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)",
          }}
        />

        {/* DESKTOP LEFT CONTENT */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute inset-y-0 left-20 z-20 hidden w-[40%] py-8 text-black lg:flex lg:flex-col xl:px-10 "
        >
          <Link
            href="/"
            aria-label="Home"
            className="w-fit text-3xl transition hover:scale-110"
          >
            <FaCode />
          </Link>

          <div className="my-auto pb-4">
            <p className="mb-6 text-xl font-semibold">Hi, I am</p>

            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
              className="whitespace-nowrap text-[42px] font-extrabold leading-tight tracking-tight xl:text-[44px]"
            >
              Riaz Mahamud
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="mt-1 whitespace-nowrap text-sm font-bold text-[#888888]"
            >
              Jr.Fullstack Developer / MERN Stack Developer
            </motion.p>

            <motion.div
              variants={socialContainer}
              initial="hidden"
              animate="visible"
              className="mt-[70px] flex gap-4"
            >
              <SocialLink
                variants={socialItem}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riazmahamud113@gmail.com"
                label="Email"
                icon={<FaAt />}
              />

              <SocialLink
                variants={socialItem}
                href="https://github.com/dev-riaz"
                label="GitHub"
                icon={<FaGithub />}
              />
              <SocialLink
                variants={socialItem}
                href="https://www.linkedin.com/in/riaz-mahamud-dev/?isSelfProfile=true"
                label="LinkedIn"
                icon={<FaLinkedinIn />}
              />
              <SocialLink
                variants={socialItem}
                href="https://www.facebook.com/mohammad.riaz.mahamud.2024"
                label="Facebook"
                icon={<FaFacebook />}
              />
            </motion.div>
             <button className="btn mt-10">Download Resume<FaArrowAltCircleDown /></button>
          </div>
        </motion.div>

        {/* MOBILE / TABLET LAYOUT */}

        <div className="relative flex min-h-[600px] flex-col overflow-hidden bg-black lg:hidden sm:min-h-[650px]">
          {/* Mobile Header */}
          <header className="absolute inset-x-0 top-0 z-[60] flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              aria-label="Home"
              className="text-2xl text-white transition-transform duration-300 hover:scale-110"
            >
              <FaCode />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center text-2xl text-white transition-transform duration-300 hover:scale-110"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </header>

          {/* Black Profile Area */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 12%)",
            }}
          />

          {/* Mobile Navigation */}
          <nav
            className={`absolute right-1 top-0 z-50 flex flex-col justify-start  gap-5 bg-black/5 w-[120px] ml-auto pt-15 text-white transition-all duration-300 ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0 pointer-events-none"
            }`}
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold transition-colors duration-200 hover:text-gray-400 w-full btn"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold transition-colors duration-200 hover:text-gray-400 btn w-full"
            >
              Contact me
            </a>
          </nav>

          {/* Mobile Profile Image */}
          <div className="absolute inset-0 flex items-end justify-center">
            <Image
              src="/portfolio image (2).png"
              alt="Riaz Mahamud"
              width={520}
              height={650}
              priority
              sizes="(max-width: 639px) 85vw, 520px"
              className="h-full w-full object-contain object-bottom transition-transform duration-500"
            />
          </div>

          {/* Mobile Introduction */}
          <div
            className="absolute inset-x-0 bottom-0 z-20 flex min-h-[122px] items-end justify-between gap-3 bg-[#686868]/50 px-5 py-6 text-white"
            style={{
              clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className="min-w-0 pb-0.5">
              <p className="mb-0.5 text-xl font-bold">Hi, I am</p>

              <h1 className="text-2xl font-bold leading-tight tracking-tight">
                Riaz Mahamud
              </h1>

              <p className="mt-0.5 text-[12px] font-medium font-bold">
                Jr.Fullstack Developer / MERN Stack Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex shrink-0 flex-col items-center gap-3 pb-0.5 text-base">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riazmahamud113@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="transition-transform duration-200 hover:scale-125"
              >
                <FaAt className="text-xl" />
              </a>

              <a
                href="https://github.com/dev-riaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-transform duration-200 hover:scale-125"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/riaz-mahamud-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform duration-200 hover:scale-125"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/mohammad.riaz.mahamud.2024"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-transform duration-200 hover:scale-125"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP RIGHT PANEL */}
        <div className="absolute inset-y-0 right-30  hidden w-[40%] bg-black lg:block ">
          {/* Navigation */}
          <motion.nav
            variants={navContainer}
            initial="hidden"
            animate="visible"
            className="absolute right-[5%] top-8 z-30 flex items-center gap-7 xl:gap-10"
          >
            {navLinks.map((item) => (
              <motion.a
                variants={navItem}
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[15px] font-bold text-[#d6d6d6] transition hover:text-gray-400"
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              variants={navItem}
              href="#contact"
              className="text-[15px] font-bold text-[#d6d6d6]  hover:text-gray-400"
            >
              Contact me
            </motion.a>
          </motion.nav>

          {/* Desktop Profile Image */}
          <Parallax className="absolute inset-0 flex items-end justify-center pt-16">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full items-end justify-center"
            >
              <Image
                src="/portfolio image (2).png"
                alt="Riaz Mahamud - Frontend Developer"
                width={650}
                height={800}
                priority
                sizes="(min-width: 1280px) 40vw, 45vw"
                className="h-[88%] max-h-none w-auto max-w-[95%] object-contain object-bottom"
              />
            </motion.div>
          </Parallax>

          {/* Image Caption */}
          {/* <p className="absolute bottom-2 right-[21%] z-20 text-[8px] leading-[10px] text-white">
            This is my profile photo,
            <br />
            but I clearly hope to
            <br />
            get one just like this
          </p> */}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative min-h-[165px] overflow-hidden bg-[#202020] px-7 py-7 text-white sm:px-12"
      >
        <div className="pointer-events-none absolute -right-8 -top-24 select-none text-[220px] font-black italic text-black/70 sm:text-[300px]">
          R
        </div>

        <div className="relative z-10 max-w-[650px]">
          <h2 className="text-base font-extrabold tracking-[0.2em] sm:text-lg">
            ABOUT ME
          </h2>

          <p className="mt-3 text-[10px] leading-[1.7] text-gray-300 sm:text-[11px]">
            I am a passionate Frontend Developer focused on building modern,
            responsive, and user-friendly web applications. I work with HTML,
            CSS, JavaScript, React, Next.js, and Tailwind CSS. I enjoy turning
            creative ideas into clean interfaces and continuously improving my
            development skills.
          </p>

          <a
            href="#portfolio"
            className="mt-4 inline-flex items-center gap-2 border-y border-gray-400 py-2 pr-3 text-[10px] transition hover:text-gray-400"
          >
            READ MORE
            <FaArrowRight className="text-[9px]" />
          </a>
        </div>
      </section>

      {/* SKILLS */}
      {/* <section
        id="skills"
        className="bg-[#d6d6d6] px-7 py-12 text-black sm:px-12"
      >
        <h2 className="text-2xl font-extrabold tracking-widest">MY SKILLS</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
          ].map((skill) => (
            <span
              key={skill}
              className="border border-black/20 bg-white/50 px-4 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section> */}

      {/* PORTFOLIO */}
      {/* <section
        id="portfolio"
        className="bg-[#202020] px-7 py-12 text-white sm:px-12"
      >
        <h2 className="text-2xl font-extrabold tracking-widest">
          MY PORTFOLIO
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
          Explore my web development projects built with React, Next.js,
          Tailwind CSS, Node.js, Express.js, and MongoDB.
        </p>

        <a
          href="https://github.com/dev-riaz"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
        >
          <FaGithub />
          View Projects
          <FaArrowRight />
        </a>
      </section> */}

      {/* CONTACT */}
      {/* <footer
        id="contact"
        className="flex flex-col gap-4 bg-black px-7 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-12"
      >
        <div>
          <h2 className="text-lg font-bold">Let's work together.</h2>
          <p className="mt-1 text-sm text-gray-400">
            Have a project in mind? Feel free to contact me.
          </p>
        </div>

        <a
          href="mailto:your-email@example.com"
          className="flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-black transition hover:bg-gray-300"
        >
          <FaAt />
          CONTACT ME
        </a>
      </footer> */}
    </main>
  );
};

export default Hero;

// function SocialLink({ href, label, icon }) {
//   const external = href.startsWith("http");

//   return (
//     <a
//       href={href}
//       aria-label={label}
//       target={external ? "_blank" : undefined}
//       rel={external ? "noreferrer" : undefined}
//       className="flex h-9 w-9 items-center justify-center bg-[#c5c5c5] text-xl text-black shadow-md transition hover:-translate-y-1 hover:bg-black hover:text-white"
//     >
//       {icon}
//     </a>
//   );
// }
