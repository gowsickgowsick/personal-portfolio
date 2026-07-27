import React from "react";
import { ArrowRight } from "lucide-react";
import { Port } from "./icon";

export default function Portfolio() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white mt-2 mb-4 leading-tight">
        Featured Python Full Stack Projects
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
Explore a selection of my full-stack development projects that demonstrate my expertise in building responsive, scalable, and database-driven web applications using Python, FastAPI, React, and SQL. Each project highlights clean architecture, modern UI design, secure backend development, and efficient database integration.          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: "150ms" }}>
          {Port.map((port, index) => (
            <div 
              key={index}
              className="group rounded-3xl border overflow-hidden transition-all duration-300 bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-900 hover:border-violet-500/20 dark:hover:border-violet-500/20 shadow-sm hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="overflow-hidden aspect-video bg-slate-200 dark:bg-slate-900 relative">
                <img 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                  src={port.img} 
                  alt={port.title}
                />
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-3">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  {port.head}
                </span>
                
                <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {port.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {port.about}
                </p>

                {/* Card CTA Action */}
                <div className="pt-2">
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer group/btn transition-colors">
                    {port.case}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Action */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <a 
            href="#"
            className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-md hover:shadow-violet-500/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Explore More Work
          </a>
        </div>

      </div>
    </section>
  );
}

