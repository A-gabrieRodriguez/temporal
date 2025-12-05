import React, { useEffect, useRef, useState } from 'react';

// Reveal: wraps children and toggles enter/exit classes when it becomes visible.
// Usage: <Reveal><YourComponent/></Reveal>
const Reveal = ({ children, rootMargin = '0px 0px -10% 0px', threshold = 0.15, className = '', duration = 1000 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms` }}
      className={`transition-all ease-out will-change-transform ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
