import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingSocials() {
  const socials = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/sanjays-aiengineer/",
      color: "hover:bg-blue-600/30 text-blue-400 border-blue-500/30"
    },
    {
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/sanjay5656",
      color: "hover:bg-gray-600/30 text-gray-300 border-gray-500/30"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:sanjaysanjay23ai@gmail.com",
      color: "hover:bg-red-600/30 text-red-400 border-red-500/30"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-5 top-1/3 z-50 flex flex-col gap-4"
    >
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-xl bg-white/5 backdrop-blur-xl border transition shadow-lg 
            hover:scale-110 hover:shadow-xl ${item.color}`}
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
}
