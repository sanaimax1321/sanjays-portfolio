import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Cpu, Languages, Sparkles, Target, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mt-28 space-y-24 max-w-6xl mx-auto px-4">

      {/* -------------------------------- */}
      {/* SECTION HEADER                    */}
      {/* -------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          About Me
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Passionate AI/ML enthusiast with hands-on experience in real-world projects, committed to delivering innovative and impactful solutions. Strong analytical and problem-solving skills with a focus on driving measurable results. Seeking opportunities to contribute to challenging AI/ML initiatives in dynamic environments
        </p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"></div>
      </motion.div>


      {/* -------------------------------- */}
      {/* EDUCATION SECTION                */}
      {/* -------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-indigo-300" />
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Generative AI Certification",
              place: "Java Home Cloud, Bangalore — Pursuing"
            },
            {
              title: "B.Tech — Artificial Intelligence & Machine Learning",
              place: "Saveetha Engineering College (2022–2025)"
            },
            {
              title: "Diploma in Electronics (Robotics)",
              place: "Swamy Abedhanandha Polytechnic College (2019–2022)"
            }
          ].map((edu, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition shadow-lg"
            >
              <p className="font-semibold text-white text-lg">{edu.title}</p>
              <p className="text-sm text-slate-400 mt-1">{edu.place}</p>
            </div>
          ))}
        </div>
      </motion.div>


      {/* -------------------------------- */}
      {/* AI FOCUS AREAS                   */}
      {/* -------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <Cpu className="w-7 h-7 text-purple-300" />
          <h3 className="text-2xl font-bold text-white">AI Focus Areas</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "ML System Design",
            "Computer Vision",
            "NLP",
            "Deep Learning",
            "Transformer Models",
            "Model Optimization",
          ].map((area) => (
            <div
              key={area}
              className="p-4 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-200 hover:bg-purple-500/20 transition"
            >
              {area}
            </div>
          ))}
        </div>
      </motion.div>


      {/* -------------------------------- */}
      {/* LANGUAGES                         */}
      {/* -------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <Languages className="w-7 h-7 text-cyan-300" />
          <h3 className="text-2xl font-bold text-white">Languages Known</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {["English", "Tamil", "Telugu", "Kannada"].map((lang) => (
            <span
              key={lang}
              className="px-5 py-2 rounded-full bg-cyan-600/20 border border-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30 transition"
            >
              {lang}
            </span>
          ))}
        </div>
      </motion.div>


      {/* -------------------------------- */}
      {/* INTERESTS & HOBBIES              */}
      {/* -------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-yellow-300" />
          <h3 className="text-2xl font-bold text-white">Interests & Hobbies</h3>
        </div>

        <ul className="grid md:grid-cols-2 gap-3 text-slate-300">
          {[
            "Playing Chess",
            "Sprinting",
            "Researching General Information"
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>


      {/* -------------------------------- */}
      {/* CAREER GOAL                       */}
      {/* -------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <Target className="w-7 h-7 text-pink-300" />
          <h3 className="text-2xl font-bold text-white">Career Goal</h3>
        </div>

        <div className="p-5 rounded-xl bg-pink-600/10 border border-pink-500/20 text-slate-300 leading-relaxed">
          My goal is to become a leading AI Engineer specializing in Computer Vision,
          Deep Learning, and Multimodal AI — creating intelligent systems that produce
          real-world impact.
        </div>
      </motion.div>


      {/* -------------------------------- */}
      {/* STRENGTHS                         */}
      {/* -------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8 pb-20"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-green-300" />
          <h3 className="text-2xl font-bold text-white">Strengths & Work Style</h3>
        </div>

        <ul className="grid md:grid-cols-2 gap-3 text-slate-300">
          {[
            "Strong Problem-Solving Skills",
            "Quick Learner & Adaptive",
            "Team Collaboration",
            "Detail-Oriented Approach",
            "Self-Motivated & Consistent",
            "Research-Oriented Mindset"
          ].map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

    </section>
  );
}
