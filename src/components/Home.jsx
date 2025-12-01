import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative grid md:grid-cols-2 gap-12 items-center pt-24 max-w-6xl mx-auto px-4"
    >
      {/* FLOATING PARTICLES BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></span>
        ))}
      </div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-xl">
          Hi, I’m <span className="text-indigo-300">Sanjay S</span>
        </h1>

        <div className="text-2xl md:text-3xl text-indigo-200 font-semibold">
          <ReactTyped
            strings={[
              "Machine Learning",
              "Natural Language",
              "Computer Vision",
              "Deep Learning",
              "Transformer",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </div>

        <p className="text-slate-300 max-w-lg leading-relaxed">
          I specialize in creating advanced AI models using
          <span className="text-cyan-300"> Deep Learning</span>,
          <span className="text-cyan-300"> Computer Vision</span>, and
          <span className="text-cyan-300"> Transformer architectures</span>.
          My work focuses on building impactful AI solutions that scale.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-4">
          <ScrollLink
            to="projects"
            smooth
            duration={400}
            className="btn-glow px-6 py-3 rounded-md font-semibold cursor-pointer text-base"
          >
            Explore Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth
            duration={400}
            className="px-6 py-3 rounded-md border border-white/10 text-slate-200 hover:bg-white/10 cursor-pointer text-base"
          >
            Contact Me
          </ScrollLink>
        </div>
      </motion.div>

      {/* RIGHT SIDE (MISSION + VISION) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center gap-10 relative z-10"
      >
        {/* CENTERED BOX CONTAINER */}
        <div className="flex flex-col items-center gap-6 w-full">

          {/* Mission Box (centered, fixed width) */}
          <div className="w-[90%] max-w-md p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-indigo-500/20 hover:border-indigo-400/40 transition shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Empowering businesses and communities through innovative AI and machine learning applications.
            </p>
          </div>

          {/* Vision Box — NOW PERFECTLY CENTERED BELOW MISSION */}
          <div className="w-[90%] max-w-md p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be a leading AI/ML innovator, shaping the future of intelligent technology for global impact.
            </p>
          </div>

        </div>
      </motion.div>
    </motion.section>
  );
}
