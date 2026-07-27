import React from "react";
import { ArrowRight } from "lucide-react";
import { Whats } from "./icon";

export default function What() {
  const scrollToContact = () => {
    document.getElementById("address")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Text Content Left */}
          <div className="flex-1 space-y-6 text-center lg:text-left animate-slide-up">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Services & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight">
              What I Do?
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
I specialize in developing modern, responsive, and database-driven web applications using Python, FastAPI, React, and SQL. I focus on creating secure, scalable, and user-friendly solutions that deliver real business value.            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
My approach combines clean frontend development, efficient backend architecture, and optimized database design to build high-performance web applications with an excellent user experience.            </p>
            
            {/* Say Hello Action */}
            <div className="pt-4">
              <button 
                onClick={scrollToContact}
                className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group mx-auto lg:mx-0"
              >
                Say Hello!
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Cards List Right */}
          <div className="flex-1 w-full space-y-6 animate-slide-up" style={{ animationDelay: "150ms" }}>
            {Whats.map((what, index) => (
              <div 
                key={index} 
                className="group p-6 md:p-8 rounded-3xl border transition-all duration-300 bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-900/60 hover:border-violet-500/30 dark:hover:border-violet-500/30 hover:border-l-4 hover:border-l-violet-600 dark:hover:border-l-violet-400 shadow-sm hover:shadow-md hover:translate-x-1"
              >
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {what.head}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {what.about}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
