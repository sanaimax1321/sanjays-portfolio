import React from "react";
import { FiMail, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 mt-12 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Sanjay S</div>

        <div className="flex items-center gap-3">
          <a className="text-slate-300 hover:text-white" href="mailto:sanjaysanjay23ai@gmail.com" aria-label="Email">
            <FiMail />
          </a>
          <a className="text-slate-300 hover:text-white" href="https://github.com/sanjay5656" aria-label="GitHub">
            <FiGithub />
          </a>
          <a className="text-slate-300 hover:text-white" href="https://www.linkedin.com/in/sanjays-aiengineer/" aria-label="Linkedin">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
