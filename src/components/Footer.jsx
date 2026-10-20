"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden bg-[#242a35] px-4 py-5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 text-center text-[10px] font-medium text-white"
        >
          Copyright 2026 All Rights Reserved By Riaz Mahamud.
        </motion.p>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            scale: 1.12,
            y: -3,
            boxShadow: "0px 0px 12px rgba(34, 211, 238, 0.35)",
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-[5%] flex h-[26px] w-[26px] items-center justify-center rounded-[2px] border border-cyan-400 text-white transition-colors duration-300 hover:bg-cyan-400 hover:text-[#242a35] sm:right-[10%] md:right-[15%] lg:right-[19.5%]"
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center"
          >
            <FaArrowUp size={14} />
          </motion.span>
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
