import React from "react";
import {
  Facebook,
  Dribbble,
  Instagram,
  Linkedin,
  Github,
  ArrowDownToLine,
  ArrowRight
} from "lucide-react";

export default function About() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Image with Floating Social Drawer */}
          <div className="flex-1 relative w-full max-w-md animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur"></div>
              <img
                className="relative rounded-2xl object-cover w-full h-[380px] md:h-[450px] shadow-lg border border-slate-100 dark:border-slate-800 transition-transform duration-500 group-hover:scale-105"
                src="../src/assets/profile.jpeg"
                alt="Gowsick working"
              />

              {/* Floating Social Icons Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 p-2 rounded-2xl border border-white/20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md shadow-lg transition-transform duration-300">
                {[
                  { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
                  { icon: <Dribbble size={16} />, href: "#", label: "Dribbble" },
                  { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
                  { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
                  { icon: <Github size={16} />, href: "#", label: "GitHub" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-white/40 dark:hover:bg-slate-900/40 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Text & CTAs */}
          <div className="flex-1 w-full space-y-6 lg:pl-4 animate-slide-up" style={{ animationDelay: "150ms" }}>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight">
                I am a python fullstack developer
              </h2>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Python Full Stack Developer with experience in building responsive and database-driven web applications using Python, FastAPI, React, and SQL.            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Passionate about developing clean, scalable, and user-friendly applications while continuously learning modern technologies and best practices.            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-6 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-md hover:shadow-violet-500/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
              >
                View My Projects
                <ArrowRight size={16} />
              </button>

              <a
                href="#"
                className="px-6 py-3.5 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 font-bold rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300"
              >
                <ArrowDownToLine size={16} />
                Download CV
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}