import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(props) {
  // Support both controlled (via App) and internal dark mode
  const controlled =
    typeof props?.darkMode === "boolean" &&
    typeof props?.toggleDarkMode === "function";

  const [internalDark, setInternalDark] = useState(false);
  const darkMode = controlled ? props.darkMode : internalDark;

  const onToggleDark = () => {
    if (controlled) {
      props.toggleDarkMode();
    } else {
      setInternalDark((d) => {
        const next = !d;
        if (next) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", String(next));
        return next;
      });
    }
  };

  // Load internal dark mode from localStorage (only when uncontrolled)
  useEffect(() => {
    if (!controlled) {
      const stored = localStorage.getItem("darkMode");
      const initial = stored ? stored === "true" : false;
      setInternalDark(initial);
      if (initial) document.documentElement.classList.add("dark");
    }
  }, [controlled]);

  // Navbar shadow on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((o) => !o);
  const closeMenu = () => setOpen(false);

  const linkCls =
    "block px-4 py-2 md:px-0 md:py-0 hover:text-primary transition-colors";
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="text-2xl font-extrabold select-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Nidhi Halwe
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 font-semibold text-gray-800 dark:text-gray-200">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={linkCls}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark mode */}
          <button
            onClick={onToggleDark}
            className="text-xl text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
