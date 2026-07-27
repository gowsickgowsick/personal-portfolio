import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Blogs } from "./icon";

export default function Blog() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    // Initialize
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleDotClick = (index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  // Determine how many pages/dots we actually need based on scroll snaps
  const [scrollSnaps, setScrollSnaps] = useState([]);
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 border-b border-slate-100 dark:border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Insights & Ideas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white mt-2 mb-4 leading-tight">
            From My Technical Blog          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Explore my latest articles where I share insights on Python Full Stack Development, FastAPI, React, SQL, REST APIs, backend architecture, frontend development, and modern web technologies. I write about practical solutions, best practices, and lessons learned from building real-world applications. </p>
        </div>

        {/* Carousel */}
        <div className="relative animate-slide-up" style={{ animationDelay: "150ms" }}>
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6 pb-6">
              {Blogs.map((blog, index) => (
                <div
                  key={index}
                  className="embla__slide basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex-shrink-0 group rounded-3xl border overflow-hidden bg-white dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/80 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {/* Image container */}
                  <div className="h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={blog.img}
                      alt={blog.title}
                    />
                  </div>

                  {/* Info body */}
                  <div className="p-6 space-y-3">
                    <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Design & Dev
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-snug line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {blog.about}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minimal Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${selectedIndex === index
                    ? "w-6 bg-violet-600 dark:bg-violet-400"
                    : "w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                aria-label={`Go to slide page ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}