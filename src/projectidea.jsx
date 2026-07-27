import React from "react";
import { ArrowRight } from "lucide-react";

export default function Projectidea() {
  const scrollToContact = () => {
    document.getElementById("address")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Banner box */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center text-center space-y-6 bg-gradient-to-br from-violet-600 to-indigo-700 dark:from-slate-900 dark:to-slate-900 dark:border dark:border-slate-800 shadow-xl transition-all duration-500">
          
          {/* Decorative glowing blobs inside banner */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 dark:bg-violet-500/5 rounded-full filter blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 dark:bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl relative z-10">
Have a Project in Mind? Let's Build It Together!          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-violet-100 dark:text-slate-400 max-w-xl leading-relaxed relative z-10">
I'm always excited to work on new Python Full Stack projects and collaborate on innovative web applications. Let's connect and create secure, scalable, and user-friendly solutions that bring your ideas to life.          </p>

          {/* CTA Action button */}
          <div className="pt-4 relative z-10">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-violet-700 dark:bg-violet-600 dark:hover:bg-violet-750 dark:text-white font-bold rounded-xl shadow-lg hover:shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
            >
              Let's Work Together
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}