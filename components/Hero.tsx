"use client";
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Spotlight className="absolute top-0 left-0 w-full h-full" fill="white" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm Napey Frederick.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <TextGenerateEffect
                words="A Passionate Developer crafting stunning experiences through elegant code."
                className="text-xl md:text-2xl text-gray-300"
                duration={0.5}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-lg transition-colors duration-300"
                onClick={() => scrollToSection('about')}
              >
                About Me
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-lg transition-colors duration-300"
                onClick={() => scrollToSection('certificates')}
              >
                Certificates
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-lg transition-colors duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
