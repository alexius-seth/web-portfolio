"use client";

import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterText({
  text,
  className = "",
  cursorClassName = "inline-block w-2 h-3.5 bg-emerald-400 ml-1 align-middle",
}: TypewriterTextProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
  };

  return (
    <span className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline"
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child} className="inline">
            {letter}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        className={cursorClassName}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
    </span>
  );
}
