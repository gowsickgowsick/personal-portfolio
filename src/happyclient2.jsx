import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { happys } from "./icon";

export default function Happyclient() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleDotClick = (index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-4xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Skills & Expertise
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white mt-2">
            Technical Skills
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative animate-slide-up" style={{ animationDelay: "150ms" }}>
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {happys.map((happy, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] flex flex-col justify-center items-center text-center space-y-6 px-4"
                >
                  <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic max-w-2xl">
                    "{happy.third}"
                  </p>

                  <div>
                    <h4 className="text-base font-bold text-slate-950 dark:text-white">
                      {happy.four}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {happy.five}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${selectedIndex === index
                    ? "w-6 bg-violet-600 dark:bg-violet-400"
                    : "w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}