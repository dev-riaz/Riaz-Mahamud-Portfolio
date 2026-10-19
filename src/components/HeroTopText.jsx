"use client";

import { motion } from "framer-motion";

const words = [
  "LEARN",
  "BUILD",
  "CREATE",
  "INNOVATE",
  "DESIGN",
  "DEVELOP",
  "GROW",
];

export default function HeroTopText() {
  const repeatedWords = [...words, ...words];

  return (
    <div className="absolute right-[5%] top-8 z-20 flex items-center gap-5">
      <div className="w-[340px] overflow-hidden">
        <motion.div
          className="flex w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 16,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {repeatedWords.map((word, index) => (
            <motion.div
              key={`${word}-${index}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="flex shrink-0 items-center gap-4 pr-5"
            >
              <span className="whitespace-nowrap text-[10px] font-medium tracking-[0.2em] text-slate-300">
                {word}
              </span>
              <span className="text-slate-500">/</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative h-[3px] w-10 shrink-0 overflow-hidden rounded-full bg-slate-600">
        <motion.div
          className="h-full w-4 rounded-full bg-white"
          animate={{ x: [0, 24, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}
