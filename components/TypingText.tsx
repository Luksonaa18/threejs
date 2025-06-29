"use client";
import { motion, Variants } from "framer-motion";

interface TypingTextProps {
  text: string;
  textStyles?: string;
}

// Properly typed animation variants
const containerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.05,
    },
  }),
};

const textVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

const TypingText = ({ text, textStyles = "" }: TypingTextProps) => (
  <motion.div
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={textStyles}
    custom={1} // important to support `show: (i = 1)` variant
  >
    {Array.from(text).map((letter, index) => (
      <motion.span key={index} variants={textVariant}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.div>
);

export default TypingText;
