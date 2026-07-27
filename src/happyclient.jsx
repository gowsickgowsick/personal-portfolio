import React from "react";
import { Img } from "./icon";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Happy() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  );

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white mb-3">
            Technologies I Use
          </h2>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl">
            I build modern full-stack web applications using industry-standard technologies, frameworks, and tools to create secure, scalable, and responsive solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="embla overflow-hidden animate-slide-up" style={{ animationDelay: "150ms" }} ref={emblaRef}>
          <div className="embla__container flex items-center gap-8">
            {Img.map((img, index) => (
              <div
                key={index}
                className="embla__slide basis-1/3 sm:basis-1/4 md:basis-1/6 flex-shrink-0 flex justify-center items-center"
              >
                <img
                  className="h-10 md:h-12 w-auto object-contain opacity-40 hover:opacity-100 dark:invert transition-all duration-300 cursor-pointer"
                  src={img.img}
                  alt="Client Partner Logo"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}