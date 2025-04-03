"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const certificates = [
  {
    title: "ALX Software Engineering",
    issuer: "ALX",
    date: "15th November 2024",
    description: "Certificate for completion of ALX Software Engineering course with specialization in Front-end.",
    image: "/17-short-specializations-certificate-frederick-napey.png",
    logo: "/alxlogo.jpg",
    link: "https://udemy.com/certificate/example1"
  },
  {
    title: "ALX Foundations In Specializations",
    issuer: "ALX",
    date: "20th September 2024",
    description: "Certificate for completiing Professional Development Skills For the Digital Age and in Tech Career Specialization.",
    image: "/87-foundations-in-specialization-certificate-frederick-napey.png",
    logo: "/alxlogo.jpg",
    link: "https://frontendmasters.com/certificate/example2"
  },
  {
    title: "ALX AI Starter Kit",
    issuer: "ALX",
    date: "12th March 2025",
    description: "Certificate for completion of ALX AI Starter Kit course.",
    image: "/113-alx-ai-starter-kit-certificate-frederick-napey.png",
    logo: "/alxlogo.jpg",
    link: "https://microsoft.com/certificate/example3"
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black-200 rounded-lg overflow-hidden hover:bg-black-300 transition-colors duration-300"
            >
              <div className="relative h-48 w-full">
                <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="relative w-64 h-64">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-gray-300 mb-4">{cert.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{cert.date}</span>
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 