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

import { FaReact, FaNodeJs, FaLeaf } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
// import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

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
      className="shrink-0 items-center whitespace-nowrap rounded-full border border-white/80 bg-[#e5e5e5] px-3 py-2 text-[15px] font-semibold text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff] xl:px-4"
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
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#portfolio" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#1b2433] text-white">
      {/* HERO */}
      <section className="relative min-h-[600px] bg-[#1b2433] lg:h-[543px] lg:min-h-0">
        {/* DESKTOP LEFT PANEL */}
        <div
          className="absolute inset-y-0 left-0 z-10 hidden w-[52%] bg-[#e5e5e5] lg:block"
          style={{
            clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)",
          }}
        />

        {/* DESKTOP LEFT CONTENT */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute inset-y-0 left-20 z-20 hidden w-[40%] py-8 text-[#1b2433] lg:flex lg:flex-col xl:px-10 "
        >
          <Link
            href="/"
            aria-label="Home"
            className="w-fit text-xl transition hover:scale-110 bg-[#e5e5e5] text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] px-3 py-2 rounded-2xl"
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
            <button className="btn mt-10 flex shrink-0 items-center whitespace-nowrap rounded-full border border-white/80 bg-[#e5e5e5] px-3 py-2 text-[15px] font-semibold text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff] xl:px-4">
              Download Resume
              <FaArrowAltCircleDown />
            </button>
          </div>
        </motion.div>

        {/* MOBILE / TABLET LAYOUT */}

        <div className="relative flex min-h-[600px] flex-col overflow-hidden bg-[#1b2433 bg-white lg:hidden sm:min-h-[650px]">
          {/* Mobile Header */}
          <header className="absolute inset-x-0 top-0 z-[60] flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              aria-label="Home"
              className="border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-[#e2e8f0] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044] px-3 py-2 rounded-2xl text-xl"
            >
              <FaCode />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              className="border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-[#e2e8f0] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044] px-3 py-2 rounded-2xl text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </header>

          {/* Black Profile Area */}
          <div
            className="absolute inset-0 bg-[#1b2433]"
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
          <div className="absolute inset-0 flex items-center justify-center bg-[#1b2433]">
            <Image
              src="/portfolio_image__2_.png"
              alt="Riaz Mahamud"
              width={520}
              height={550}
              priority
              sizes="(max-width: 639px) 85vw, 520px"
              className="h-[400px] w-[400px] object-cover transition-transform duration-500 bg-[#1b2433] "
            />
          </div>

          {/* Mobile Introduction */}
          <div
            className="absolute inset-x-0 bottom-0 z-20 flex min-h-[122px] items-end justify-between gap-3 bg-[#e5e5e5] px-8 py-4 text-[#272727]"
            style={{
              clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className="min-w-0 pb-10 ">
              <p className="mb-0.5 text-xl font-bold">Hi, I am</p>

              <h1 className="text-2xl font-bold leading-tight tracking-tight">
                Riaz Mahamud
              </h1>

              <p className="mt-0.5 text-[12px] font-medium font-bold text-[#888888]">
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
                className="items-center whitespace-nowrap rounded-full border border-white/80 bg-[#e5e5e5] px-2 py-2 text-[15px] font-semibold text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff] xl:px-4"
              >
                <FaAt className="text-xl" />
              </a>

              <a
                href="https://github.com/dev-riaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="shrink-0 items-center whitespace-nowrap rounded-full border border-white/80 bg-[#e5e5e5] px-2 py-2 text-[15px] font-semibold text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff] xl:px-4"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/riaz-mahamud-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="shrink-0 items-center whitespace-nowrap rounded-full border border-white/80 bg-[#e5e5e5] px-2 py-2 text-[15px] font-semibold text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff] xl:px-4"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/mohammad.riaz.mahamud.2024"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="shrink-0 items-center whitespace-nowrap rounded-full border border-white/80 bg-[#e5e5e5] px-2 py-2 text-[15px] font-semibold text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff] xl:px-4"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP RIGHT PANEL */}

        {/* <div className="absolute inset-y-0 right-0 hidden w-[60%] overflow-hidden bg-[#1b2433] lg:block">
          Decorative Background
          <div className="absolute left-1/2 top-[55%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-400/10 bg-gradient-to-br from-slate-400/15 to-transparent shadow-[0_0_80px_rgba(148,163,184,0.08)] xl:h-[390px] xl:w-[390px]" />
          <p className="bg-amber-200 block bottom-3">hi<FaReact></FaReact></p>

          <div className="absolute left-1/2 top-[55%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/[0.04] xl:h-[330px] xl:w-[330px]" />

          Navigation
          <motion.nav
            variants={navContainer}
            initial="hidden"
            animate="visible"
            className="absolute right-[20%] top-7 z-30 flex items-center gap-1 rounded-2xl bg-[#1b2433] p-2 xl:gap-2"
          >
            {navLinks.map((item) => (
              <motion.a
                variants={navItem}
                key={item.href}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                className={`whitespace-nowrap rounded-xl border px-4 py-3 text-[13px] font-bold transition-all duration-300 ${
                  activeLink === item.href
                    ? "border-[#1b2433] bg-[#1b2433] text-[#cbd5e1] shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                    : "border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-[#e2e8f0] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
                }`}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              variants={navItem}
              href="#contact"
              onClick={() => setActiveLink("#contact")}
              className={`whitespace-nowrap rounded-xl border px-4 py-3 text-[13px] font-bold transition-all duration-300 ${
                activeLink === "#contact"
                  ? "border-[#1b2433] bg-[#1b2433] text-[#cbd5e1] shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                  : "border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-[#e2e8f0] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
              }`}
            >
              Contact me
            </motion.a>
          </motion.nav>

          Floating Technology Icons
          <div className="absolute left-[17%] top-[35%] z-20 flex flex-col gap-3">
            {[
              { icon: FaReact, color: "text-sky-400" },
              { icon: SiNextdotjs, color: "text-white" },
              { icon: FaNodeJs, color: "text-green-400" },
              { icon: FaLeaf, color: "text-emerald-400" },
            ].map(({ icon: Icon, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 + index * 0.15 },
                  x: { duration: 0.6, delay: 0.5 + index * 0.15 },
                  y: {
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-500/30 bg-[#202d40] shadow-lg xl:h-14 xl:w-14"
              >
                <Icon className={`text-2xl ${color}`} />
              </motion.div>
            ))}
          </div>

          Profile Image
          <Parallax className="absolute inset-0 z-10 flex items-end justify-center overflow-hidden pt-24">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full w-full items-end justify-center overflow-hidden"
            >
              <Image
                src="/portfolio_image__2_.png"
                alt="Riaz Mahamud - Full Stack Developer"
                width={650}
                height={800}
                priority
                sizes="40vw"
                className="h-[78%] max-h-[620px] w-auto max-w-[90%] object-contain object-bottom xl:h-[84%]"
              />
            </motion.div>
          </Parallax>

          Handwritten Style Slogan
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute right-[7%] top-[37%] z-20 rotate-[-8deg] text-slate-300"
          >
            <p className="font-serif text-lg italic leading-7 xl:text-xl">
              Let&apos;s
              <br />
              Build
              <br />
              Something
              <br />
              Great
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 65 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-3 h-px rotate-[-15deg] bg-slate-300"
            />
          </motion.div>

          Side Label
          <div className="absolute right-[2%] top-[48%] z-20 hidden [writing-mode:vertical-rl] text-[9px] font-semibold tracking-[0.35em] text-slate-400 xl:block">
            FULL STACK DEVELOPER
          </div>

          Bottom Scroll Indicator
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 right-[6%] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/60 text-slate-300 transition hover:bg-slate-300 hover:text-[#1b2433]"
          >
            ↓
          </motion.a>
        </div> */}

        <div className="absolute inset-y-0 right-0 hidden w-[60%] overflow-hidden bg-[#1b2433] lg:block">
          {/* Decorative Background */}
          <div className="absolute left-1/2 top-[55%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-400/10 bg-gradient-to-br from-slate-400/15 to-transparent shadow-[0_0_80px_rgba(148,163,184,0.08)] xl:h-[390px] xl:w-[390px]" />

          <div className="absolute left-1/2 top-[55%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/[0.04] xl:h-[330px] xl:w-[330px]" />

          {/* Navigation */}
          <motion.nav
            variants={navContainer}
            initial="hidden"
            animate="visible"
            className="absolute right-[20%] top-7 z-30 flex items-center gap-1 rounded-2xl bg-[#1b2433] p-2 xl:gap-2"
          >
            {navLinks.map((item) => (
              <motion.a
                variants={navItem}
                key={item.href}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                className={`whitespace-nowrap rounded-xl border px-4 py-3 text-[13px] font-bold transition-all duration-300 ${
                  activeLink === item.href
                    ? "border-[#1b2433] bg-[#1b2433] text-[#cbd5e1] shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                    : "border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-[#e2e8f0] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
                }`}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              variants={navItem}
              href="#contact"
              onClick={() => setActiveLink("#contact")}
              className={`whitespace-nowrap rounded-xl border px-4 py-3 text-[13px] font-bold transition-all duration-300 ${
                activeLink === "#contact"
                  ? "border-[#1b2433] bg-[#1b2433] text-[#cbd5e1] shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                  : "border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-[#e2e8f0] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
              }`}
            >
              Contact me
            </motion.a>
          </motion.nav>

          {/* Circular Technology Orbit */}
          <div className="pointer-events-none absolute left-1/2 top-[55%] z-[5] aspect-square w-[340px] -translate-x-1/2 -translate-y-1/2 xl:w-[390px]">
            {/* Main Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-slate-300/25"
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200 shadow-[0_0_12px_rgba(226,232,240,0.7)]" />
            </motion.div>

            {/* Inner Orbit Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[10%] rounded-full border border-slate-400/15"
            >
              <span className="absolute right-[10%] top-[12%] h-2 w-2 rounded-full bg-slate-300/70 " />
            </motion.div>

            {/* Orbit Glow */}
            <div className="absolute inset-[20%] rounded-full bg-slate-300/[0.04] blur-2xl" />

            {/* Technology Icons Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              {[
                {
                  Icon: FaReact,
                  color: "text-sky-400",
                  angle: 0,
                },
                {
                  Icon: SiNextdotjs,
                  color: "text-white",
                  angle: 90,
                },
                {
                  Icon: FaNodeJs,
                  color: "text-green-400",
                  angle: 180,
                },
                {
                  Icon: SiMongodb,
                  color: "text-emerald-400",
                  angle: 270,
                },
              ].map(({ Icon, color, angle }, index) => {
                const radius = 32;
                const radians = (angle * Math.PI) / 180;

                const targetX = Math.cos(radians) * radius;
                const targetY = Math.sin(radians) * radius;

                return (
                  <motion.div
                    key={angle}
                    initial={{
                      opacity: 0,
                      scale: 0.2,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5 + index * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-slate-500/30 bg-[#202d40] shadow-lg xl:h-14 xl:w-14"
                    style={{
                      left: `calc(50% + ${targetX}%)`,
                      top: `calc(50% + ${targetY}%)`,
                      marginLeft: "-25px",
                      marginTop: "-25px",
                    }}
                  >
                    {/* Keep Icons Upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex items-center justify-center"
                    >
                      <Icon className={`text-2xl ${color} xl:text-3xl`} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Profile Image */}
          <Parallax className="absolute inset-0 z-10 flex items-end justify-center overflow-hidden pt-24">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full w-full items-end justify-center overflow-hidden"
            >
              <Image
                src="/portfolio_image__2_.png"
                alt="Riaz Mahamud - Full Stack Developer"
                width={650}
                height={800}
                priority
                sizes="40vw"
                className="h-[78%] max-h-[620px] w-auto max-w-[90%] object-contain object-bottom xl:h-[84%]"
              />
            </motion.div>
          </Parallax>

          {/* Handwritten Style Slogan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute right-[7%] top-[37%] z-20 rotate-[-8deg] text-slate-300"
          >
            <p className="font-serif text-lg italic leading-7 xl:text-xl">
              Let&apos;s
              <br />
              Build
              <br />
              Something
              <br />
              Great
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 65 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-3 h-px rotate-[-15deg] bg-slate-300"
            />
          </motion.div>

          {/* Side Label */}
          <div className="absolute right-[2%] top-[48%] z-20 hidden [writing-mode:vertical-rl] text-[9px] font-semibold tracking-[0.35em] text-slate-400 xl:block">
            FULL STACK DEVELOPER
          </div>

          {/* Bottom Scroll Indicator */}
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 right-[6%] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/60 text-slate-300 transition hover:bg-slate-300 hover:text-[#1b2433]"
          >
            ↓
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      {/* <section
        id="about"
        className="relative min-h-[165px] overflow-hidden bg-[#202020] px-7 py-7 text-white sm:px-12 md:px-30"
      >
        <div className="pointer-events-none absolute -right-8 -top-24 select-none text-[220px] font-black italic text-black/70 sm:text-[300px]">
          r
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
      </section> */}

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
