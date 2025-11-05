import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorOuter = document.querySelector('.cursor-outer');

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorOuter) {
        cursorOuter.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="pointer-events-none fixed -top-5 -left-5 z-[9999]">
      <div className="cursor-outer w-10 h-10 border border-black/50 rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-100 will-change-transform flex items-center justify-center">
        <div className="cursor-inner w-2 h-2 bg-black/50 rounded-full"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
