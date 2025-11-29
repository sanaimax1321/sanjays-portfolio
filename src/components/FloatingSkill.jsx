import React from "react";
import { motion } from "framer-motion";

export default function FloatingSkill({ skill, onClick }) {
  const { label, pct, icon } = skill;

  return (
    <motion.button
      onClick={() => onClick(skill)}
      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center
                 cursor-pointer shadow-lg backdrop-blur-xl"
      whileHover={{ scale: 1.12, y: -6 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-40"
        style={{
          background: "linear-gradient(135deg, #7c3aed55, #06b6d455)",
        }}
      ></div>

      {/* Skill Icon */}
      <img
        src={icon}
        alt={label}
        className="relative z-10 w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    </motion.button>
  );
}
