"use client";

import About from "./pages/about-me";
import Projects from "./pages/projects";
import { motion } from "framer-motion";

function Fade({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className="min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ amount: 0.5, once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="bg-black">
      <div className="scroll-bar" />
      <Fade>
        <About />
      </Fade>
      <Fade>
        <Projects />
      </Fade>
    </div>
  );
}
