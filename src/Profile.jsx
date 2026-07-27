
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

function Profile() {
  const scrollToContact = () => {
    document.getElementById("address")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-400/10 dark:bg-violet-600/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Hero Content Left */}
          <div className="flex-1 w-full text-center lg:text-left space-y-8 animate-slide-up">
            
            {/* Intro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/40 text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mx-auto lg:mx-0">
              <Sparkles size={12} className="animate-pulse" />
              Available for  Work
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-none">
                Hello, I'm <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">Gowsick</span>
              </h1>
              <p className="text-lg font-semibold text-slate-500 dark:text-slate-400">
              python fullstack developer
              </p>
            </div>

            {/* Sub-description */}
            <p className="max-w-lg text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
I build secure, responsive, and user-friendly web applications using Python, FastAPI, React, SQL, and modern web technologies.            </p>

            {/* Say Hello Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg hover:shadow-violet-600/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
              >
                Say Hello!
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats Section */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-900 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">10+</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Project</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">5+</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider"> Technologies</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">100%</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Learning & Growth</p>
              </div>
            </div>

          </div>

          {/* Hero Photo Right */}
          <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center animate-slide-up" style={{ animationDelay: "150ms" }}>
            <div className="relative group">
              {/* Image Frame Accent */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-500 opacity-20 dark:opacity-30 blur group-hover:opacity-40 transition duration-300"></div>
              
              {/* Image */}
              <img 
                className="relative rounded-3xl object-cover w-full h-[400px] md:h-[450px] lg:h-[500px] shadow-2xl border border-white dark:border-slate-800 transition-transform duration-300 group-hover:scale-[1.01]" 
                src="../src/assets/profile2.jpeg" 
                alt="Gowsick's Portrait"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;