// app/components/AnimatedText.tsx

"use client";

import { motion } from "framer-motion";

export default function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{
            opacity: 0,
            y: 35,
            rotateX: -60,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.055,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mr-[0.28em] inline-block origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}