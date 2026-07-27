import React from "react";
import { Invitation } from "./icon";

export default function Workprocess() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Title and Intro Left */}
          <div className="flex-1 space-y-6 text-center lg:text-left animate-slide-up">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Work Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight">
              A Structured Approach to Building Modern Web Applications            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I develop responsive, secure, and scalable web applications using Python, FastAPI, React, and SQL. From planning and UI design to backend development and database integration, I focus on creating reliable, user-friendly solutions            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I write clean, maintainable code and follow best practices to build high-performance applications that deliver a seamless user experience.            </p>
          </div>

          {/* Cards Grid Right */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: "150ms" }}>
            {Invitation.map((card, index) => (
              <div
                key={index}
                className="group p-6 rounded-3xl border transition-all duration-300 bg-white dark:bg-slate-900/40 border-slate-100 dark:border-slate-800 hover:border-violet-500/30 dark:hover:border-violet-500/30 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                {/* Icon wrapper */}
                <div className="inline-flex p-3 rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400 mb-5 group-hover:scale-110 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-all duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.about}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}






