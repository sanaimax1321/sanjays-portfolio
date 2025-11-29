import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-auto">
      <div
        className="
        max-w-6xl mx-auto px-6 py-3
        backdrop-blur-xl bg-white/10 dark:bg-black/20
        border border-white/10
        shadow-lg shadow-black/30
        rounded-2xl
        flex items-center justify-between
      "
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="font-bold text-lg tracking-wide
            bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent
          "
          >
            Sanjay S
          </a>

          <div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
            <span className="px-2 py-0.5 rounded bg-white/10">AI</span>
            <span className="opacity-70">/</span>
            <span>Vision</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <ScrollLink
              key={n.id}
              to={n.id}
              spy
              smooth
              offset={-80}
              duration={400}
              className="
                relative cursor-pointer 
                text-slate-300 hover:text-white 
                transition font-medium
              "
              activeClass="text-white after:w-full"
            >
              {n.label}
            </ScrollLink>
          ))}

          {/* THEME BUTTON */}
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            className="
              ml-4 p-2 rounded-lg 
              bg-white/10 hover:bg-white/20 
              transition
            "
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        {/* MOBILE TOOLS */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="p-2 rounded-lg bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg bg-white/10"
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            mt-3 md:hidden
            bg-black/70 backdrop-blur-xl 
            border border-white/10
            rounded-xl
            mx-4
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
                duration={400}
                onClick={() => setOpen(false)}
                className="
                  py-2 px-3 rounded-lg 
                  text-slate-200 
                  hover:bg-white/10 
                  transition 
                  cursor-pointer
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
