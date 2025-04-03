"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGamepad, FaBook, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[700px] w-full"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl"></div>
            <Image
              src="/enhanced_zoomed.jpg"
              alt="About Me"
              fill
              className="rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate software developer with a strong foundation in web development.
                My journey in tech began with a curiosity for creating digital experiences,
                and that curiosity has evolved into a professional pursuit of excellence in
                software development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Frontend</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• React.js</li>
                    <li>• Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Others</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Unity </li>
                    <li>• Microsoft Office</li>
                    <li>• Blender</li>
                    <li>• Graphic Design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building responsive, user-friendly web applications
                that solve real-world problems. My approach combines clean code
                practices with modern design principles to create seamless digital
                experiences. Other than that, i like to ...
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Beyond Coding</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-black-200 p-4 rounded-lg text-center">
                  <FaGamepad className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">Gaming & Game Dev</h4>
                  <p className="text-gray-400 text-sm">I like to game and create games with Unity & C#</p>
                </div>
                <div className="bg-black-200 p-4 rounded-lg text-center">
                  <FaBook className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">Reading</h4>
                  <p className="text-gray-400 text-sm">Exploring new worlds through books</p>
                </div>
                <div className="bg-black-200 p-4 rounded-lg text-center">
                  <FaUsers className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">Family & Friends</h4>
                  <p className="text-gray-400 text-sm">Creating lasting memories</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 