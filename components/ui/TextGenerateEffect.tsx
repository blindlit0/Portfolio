"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: string;
  duration?: number;
}) => {
  const scope = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (!scope.current) return;
      await controls.start({
        opacity: 1,
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      });
    };

    animate();
  }, [controls, duration]);

  const renderWords = () => {
    const wordsArray = words.split(" ");
    return wordsArray.map((word, idx) => {
      return (
        <motion.span
          key={word + idx}
          className="opacity-0"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{
            duration: duration,
            delay: idx * 0.1,
          }}
        >
          {word}{" "}
        </motion.span>
      );
    });
  };

  return (
    <motion.div
      ref={scope}
      className={cn("font-bold", className)}
      initial={{ opacity: 0 }}
    >
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </motion.div>
  );
};
