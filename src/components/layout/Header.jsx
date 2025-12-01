import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-auto">
      <div
        className="
          max-w-6xl mx-auto px-6 py-3
          backdrop-blur-2xl bg-white/5
          border border-white/20
          shadow-[0_0_25px_rgba(0,0,0,0.5)]
          rounded-2xl
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <a
          href="#home"
          className="
            font-bold text-lg tracking-wide 
            bg-gradient-to-r from-indigo-300 via-cyan-300 to-teal-300 
            bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]
          "
        >
          Sanjay S
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <ScrollLink
              key={n.id}
              to={n.id}
              spy
              smooth
              offset={-80}
              duration={400}
              className="
                relative cursor-pointer select-none
                text-slate-300 font-medium
                transition
                hover:text-cyan-300
                hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]
                group
              "
              activeClass="
                text-cyan-300 
                drop-shadow-[0_0_10px_rgba(0,255,255,1)]
                after:w-full
              "
            >
              {n.label}

              {/* ANIMATED UNDERLINE */}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0 
                  bg-gradient-to-r from-indigo-400 to-cyan-300
                  rounded-full transition-all duration-300 
                  group-hover:w-full
                "
              ></span>
            </ScrollLink>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            md:hidden p-3 rounded-xl 
            bg-white/10 text-cyan-300
            shadow-[0_0_10px_rgba(0,255,255,0.4)]
          "
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            mt-3 md:hidden
            bg-black/70 backdrop-blur-2xl 
            border border-white/10
            rounded-xl mx-4
            shadow-[0_0_20px_rgba(0,255,255,0.3)]
          "
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <ScrollLink
                key={n.id}
                to={n.id}
                spy
                smooth
                offset={-80}
                duration={300}
                onClick={() => setOpen(false)}
                className="
                  py-2 px-3 rounded-lg 
                  text-slate-200 text-base
                  hover:text-cyan-300 
                  hover:bg-white/5
                  hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]
                  transition cursor-pointer
                "
              >
                {n.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
