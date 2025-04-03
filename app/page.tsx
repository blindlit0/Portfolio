import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certificates from "../components/Certificates";
import About from "../components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-black-100">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
