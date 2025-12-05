import React, { useRef, useEffect } from 'react';

const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
  </svg>
);

const Carousel = ({ children }) => {
  const trackRef = useRef(null);

  const scroll = (direction = 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  // Center the first visible card on mount so it's not hidden under the fade overlays.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const centerFirst = () => {
      // find first element with data-carousel-item attribute
      const item = el.querySelector('[data-carousel-item]');
      if (!item) return;
      const left = item.offsetLeft - Math.max(0, (el.clientWidth - item.clientWidth) / 2);
      el.scrollTo({ left, behavior: 'auto' });
    };

    // center once on mount
    centerFirst();

    // re-center on resize
    window.addEventListener('resize', centerFirst);
    return () => window.removeEventListener('resize', centerFirst);
  }, []);

  return (
    <div className="relative">
      <button
        aria-label="Anterior"
        onClick={() => scroll('prev')}
        className="absolute -left-3 top-1/2 z-20 -translate-y-1/2 p-2 bg-white/90 text-amber-900 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        <PrevIcon />
      </button>

      <div className="relative">
        {/*
          Track: use a mask gradient so the left/right edges fade out.
          The -webkit-mask-image ensures good support in WebKit/Blink.
          We also provide lightweight gradient overlays as a visual fallback.
        */}
        <div
          ref={trackRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-4 px-8"
          style={{
            // soften the mask edges a bit so overlay doesn't obscure cards
            WebkitMaskImage: 'linear-gradient(to right, transparent 6%, black 12%, black 88%, transparent 94%)',
            maskImage: 'linear-gradient(to right, transparent 6%, black 12%, black 88%, transparent 94%)'
          }}
        >
          {/* spacer so first/last cards can be centered and not hidden by the overlay */}
          <div className="flex-shrink-0 w-6 sm:w-8 md:w-12 lg:w-20" aria-hidden />
          {React.Children.map(children, (child, i) => (
            // Reduce min-widths so cards look thinner in the carousel
            <div key={i} data-carousel-item className="snap-center flex-shrink-0 min-w-[200px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[340px]">
              {child}
            </div>
          ))}
          <div className="flex-shrink-0 w-6 sm:w-8 md:w-12 lg:w-20" aria-hidden />
        </div>

    {/* Fallback overlays for browsers that may not respect mask-image.
      Use the page background color so the fade matches the site (from index.css: #DFDCD7).
    */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#DFDCD7] to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#DFDCD7] to-transparent" />
      </div>

      <button
        aria-label="Siguiente"
        onClick={() => scroll('next')}
        className="absolute -right-3 top-1/2 z-20 -translate-y-1/2 p-2 bg-white/90 text-amber-900 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default Carousel;
