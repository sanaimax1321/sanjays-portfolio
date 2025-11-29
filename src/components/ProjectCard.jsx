import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative pl-10 pb-14"
    >
      {/* Line */}
      <div className="absolute left-3 top-0 h-full w-[2px] bg-white/20"></div>

      {/* Dot */}
      <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1]"></div>

      {/* Content Box */}
      <div className="p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>

        <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
