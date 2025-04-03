"use client";
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Code Haven",
    description: "Code Haven is a real-time collaborative code editor with features like syntax highlighting, code execution, and group chat.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/a-digital-illustration-of-the-text-code-_ByTG4jTWR1a__HiW4r1LCQ_A2Coom7AQAGkUYkr5AWaiw.jpeg",
    link: "https://code-haven-wheat.vercel.app/",
    github: "https://github.com/deezyfg/code-haven"
  },
  {
    title: "StashSmart",
    description: "StashSmart is a web-based application designed to empower users with control over their financial well-being.",
    tech: ["HTML5", "CSS", "JavaScript"],
    image: "/a-white-text-on-a-dark-background-that-s_sZr_F_mJQzqOs0rHsb76pQ_f0PxA8k0T-2nr__aiZwSng.jpeg",
    link: "https://blindlit0.github.io/StashSmart/",
    github: "https://github.com/blindlit0/StashSmart"
  },
  {
    title: "Ballin",
    description: "A simple game made with Unity.",
    tech: ["Unity", "C#"],
    image: "/a-sleek-modern-digital-design-with-the-t_mesoT18ARmeoRFo-iQFutQ_aC2AEXQGS5G5MnOe4fek2g.jpeg",
    link: "https://ballinunity.netlify.app/",
    github: "https://github.com/blindlit0/Ballin"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black-200 rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                    </Button>
                    <Button
                      className="bg-gray-800 hover:bg-gray-700 text-white"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <FaGithub className="mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-white hover:text-blue-500 transition-colors duration-300 block mb-4"
                >
                  {project.title}
                </a>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black-300 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 