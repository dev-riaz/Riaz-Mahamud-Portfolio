"use client";

import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#242a35] px-4 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Copyright */}
        <p className="flex-1 text-center text-[10px] font-medium text-white">
          Copywrite 2026 All Rights Reserved By Riaz Mahamud.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="absolute right-[19.5%] flex h-[26px] w-[26px] items-center justify-center rounded-[2px] border border-cyan-400 text-white transition-all duration-300 hover:bg-cyan-400 hover:text-[#242a35]"
        >
          <FaArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
