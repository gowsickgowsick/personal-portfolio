import React, { useState, useEffect } from "react";
import { ChevronUp, Sparkles } from "lucide-react";

export default function Copy() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-12 px-6 md:px-8 border-t border-slate-100 dark:border-slate-900/60 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-900/60">
          
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-sm shadow-violet-500/10 group-hover:scale-105 transition-transform">
              <Sparkles size={14} />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              Gowsick
            </span>
          </button>

          {/* Quick links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {[
                { id: "profile", label: "Home" },
                { id: "about", label: "About" },
                { id: "process", label: "Process" },
                { id: "portfolio", label: "Portfolio" },
                { id: "blog", label: "Blog" },
                { id: "what", label: "Services" },
                { id: "address", label: "Contact" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Gowsick. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Developed with ❤️ by</span>
            <a 
              href="https://themewagon.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              ThemeWagon
            </a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 z-40 cursor-pointer animate-scale-in"
          aria-label="Scroll back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </footer>
  );
}