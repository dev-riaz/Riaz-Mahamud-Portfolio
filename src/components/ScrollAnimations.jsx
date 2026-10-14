"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StaggerReveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 75]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
