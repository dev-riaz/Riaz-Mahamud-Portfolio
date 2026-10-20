"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Parallax } from "./ScrollAnimations";
import {
  FaAt,
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaFacebook,
  FaArrowAltCircleDown,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";

import { FaReact, FaNodeJs, FaLeaf } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { TbHomeFilled } from "react-icons/tb";
import { LuBlocks } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";
import HeroTopText from "./HeroTopText";
import { TypeAnimation } from "react-type-animation";

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
    x: -35,
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

  const [isScrolled, setIsScrolled] = useState(false);

  // navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // download button
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const navLinks = [
    { label: "Home", icon: <TbHomeFilled />, href: "#home" },
    { label: "About me", icon: <FaUser />, href: "#about" },
    { label: "Skills", icon: <FaCode />, href: "#skills" },
    { label: "Projects", icon: <LuBlocks />, href: "#projects" },
  ];

  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#1b2433] text-white"
    >
      {/* HERO */}
      <section className="relative min-h-[600px] bg-[#1b2433] lg:h-[543px] lg:min-h-0">
        {/* DESKTOP LEFT PANEL */}
        <div
          className="absolute inset-y-0 left-0 z-10 hidden w-[52%] bg-[#e5e5e5] lg:block"
          style={{
            clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)",
          }}
        />
        {/* navigation */}
        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="fixed left-4 top-1/2 z-50 hidden sm:hidden -translate-y-1/2 flex-col items-start gap-3 lg:flex xl:left-2"
        >
          {navLinks.map((item) => (
            <motion.a
              variants={navItem}
              key={item.href}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={`group relative flex h-12 w-12 font-bold items-center justify-center rounded-xl border transition-all duration-300 ${
                isScrolled
                  ? activeLink === item.href
                    ? "border-[#1b2433] bg-[#1b2433] text-green-600 shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                    : "border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-green-600 hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
                  : activeLink === item.href
                    ? "border-white/80 bg-[#e5e5e5] text-[#272727] shadow-[inset_3px_3px_6px_#c7c7c7,inset_-2px_-2px_6px_#ffffff]"
                    : "border-white/80 bg-[#e5e5e5] text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] hover:text-green-600 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff]"
              }`}
            >
              {/* Icon */}
              <span className="text-lg">{item.icon}</span>

              {/* Hover Label */}
              <span
                className={`pointer-events-none absolute left-14 top-1/2 z-50 -translate-x-2 -translate-y-1/2 whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                  isScrolled
                    ? "bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044]"
                    : "bg-[#e5e5e5] text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff]"
                }`}
              >
                {item.label}
              </span>
            </motion.a>
          ))}

          {/* Contact */}
          <motion.a
            variants={navItem}
            href="#contact"
            onClick={() => setActiveLink("#contact")}
            className={`group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
              isScrolled
                ? activeLink === "#contact"
                  ? "border-[#1b2433] bg-[#1b2433] text-green-600 shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                  : "border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-green-600 hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
                : activeLink === "#contact"
                  ? "border-white/80 bg-[#e5e5e5] text-[#272727] shadow-[inset_3px_3px_6px_#c7c7c7,inset_-2px_-2px_6px_#ffffff]"
                  : "border-white/80 bg-[#e5e5e5] text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] hover:text-green-600 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff]"
            }`}
          >
            {/* Contact Icon */}
            <span className="text-lg">
              <MdOutlineEmail />
            </span>

            {/* Hover Label */}
            <span
              className={`pointer-events-none absolute left-14 top-1/2 z-50 -translate-x-2 -translate-y-1/2 whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                isScrolled
                  ? "bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044]"
                  : "bg-[#e5e5e5] text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff]"
              }`}
            >
              Contact me
            </span>
          </motion.a>
        </motion.nav>

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
            <TypeAnimation
              sequence={["Hi, I am"]}
              wrapper="p"
              speed={30}
              cursor={false}
              repeat={0}
              className="mb-6 text-xl font-semibold"
            />
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

            <button
              disabled={isDownloading}
              onClick={() => {
                if (isDownloading) return;

                setIsDownloading(true);
                setIsDownloaded(false);

                const link = document.createElement("a");
                link.href = "/Riaz Mahamud fullStack-resume.pdf";
                link.download = "Riaz-Mahamud-CV.pdf";
                document.body.appendChild(link);
                link.click();
                link.remove();

                setTimeout(() => {
                  setIsDownloading(false);
                  setIsDownloaded(true);

                  setTimeout(() => {
                    setIsDownloaded(false);
                  }, 2000);
                }, 1500);
              }}
              className="btn mt-10 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/80 bg-[#e5e5e5] px-3 py-2 text-[15px] font-semibold text-[#272727] shadow-[3px_3px_6px_#c7c7c7,-2px_-2px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c7c7c7,inset_-2px_-2px_5px_#ffffff] disabled:cursor-wait disabled:opacity-80 xl:px-4"
            >
              {isDownloading ? (
                <>
                  Downloading...
                  <ImSpinner2 className="animate-spin text-lg" />
                </>
              ) : isDownloaded ? (
                <>
                  Downloaded!
                  <FaCheckCircle className="text-green-600" />
                </>
              ) : (
                <>
                  Download Resume
                  <FaArrowAltCircleDown className="transition-transform duration-300 group-hover:translate-y-1" />
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* MOBILE / TABLET LAYOUT */}

        <div className="relative flex min-h-[600px] flex-col overflow-hidden bg-[#1b2433] lg:hidden sm:min-h-[650px]">
          {/* Mobile Navigation */}
          <nav
            className={`fixed left-0 z-[60] flex w-full items-center justify-center gap-5 overflow-x-auto px-4 py-4 transition-all duration-500 sm:gap-4 sm:px-6 ${
              isScrolled ? "bottom-0 top-auto" : "top-0 bottom-auto"
            }`}
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                aria-label={item.label}
                className={`group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                  activeLink === item.href
                    ? "border-[#1b2433] bg-[#1b2433] text-cyan-400 shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                    : "border-transparent bg-[#1b2433] text-white shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-cyan-400 hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
                }`}
              >
                <span className="text-lg">{item.icon}</span>

                {/* Hover effect */}
                <span className="pointer-events-none absolute left-1/2 top-14 z-[70] -translate-x-1/2 -translate-y-2 whitespace-nowrap rounded-lg bg-[#1b2433] px-3 py-2 text-xs font-bold text-white opacity-0 shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            ))}

            {/* Contact */}
            <a
              href="#contact"
              onClick={() => setActiveLink("#contact")}
              aria-label="Contact me"
              className={`group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                activeLink === "#contact"
                  ? "border-[#1b2433] bg-[#1b2433] text-cyan-400 shadow-[inset_5px_5px_10px_#101722,inset_-5px_-5px_10px_#263044]"
                  : "border-transparent bg-[#1b2433] text-white shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-cyan-400 hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
              }`}
            >
              <MdOutlineEmail className="text-lg" />

              <span className="pointer-events-none absolute left-1/2 top-14 z-[70] -translate-x-1/2 -translate-y-2 whitespace-nowrap rounded-lg bg-[#1b2433] px-3 py-2 text-xs font-bold text-white opacity-0 shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Contact me
              </span>
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

        <div className="absolute inset-y-0 right-0 hidden w-[60%] overflow-hidden bg-[#1b2433] lg:block">
          {/* Decorative Background */}
          <div className="absolute left-1/2 top-[55%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-400/10 bg-gradient-to-br from-slate-400/15 to-transparent shadow-[0_0_80px_rgba(148,163,184,0.08)] xl:h-[390px] xl:w-[390px]" />

          <div className="absolute left-1/2 top-[55%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/[0.04] xl:h-[330px] xl:w-[330px]" />
          <HeroTopText />

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
    </main>
  );
};

export default Hero;
