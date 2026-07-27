import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to apply glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  const navLinks = [
    { id: "profile", label: "Home" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "what", label: "Services" }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b bg-white/80 dark:bg-slate-950/80 border-slate-100 dark:border-slate-900/60 backdrop-blur-md" 
        : "py-5 bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="h-9 w-9 rounded-xl bg-violet-600 flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
            <Sparkles size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Gowsick
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-violet-600 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Contact Button */}
          <button
            onClick={() => scrollToSection("address")}
            className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-violet-500/10 hover:shadow-violet-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Nav Trigger & Theme toggler */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            className="p-2 text-slate-700 dark:text-white cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Open navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="lg:hidden animate-scale-in border-t border-slate-100 dark:border-slate-900 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg transition-colors">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left text-base font-semibold text-slate-700 dark:text-slate-200 py-1.5 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-100 dark:border-slate-900">
              <button
                onClick={() => scrollToSection("address")}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white text-center font-bold py-3 rounded-xl shadow-md"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;