import React from 'react';

const Preloader = () => {
  const letters = 'LOADING'.split('');

  return (
    <div className="preloader fixed inset-0 z-[99999] flex items-center justify-center bg-transparent overflow-hidden">
      {/* Background SVG Shape */}
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="absolute top-0 w-screen h-[110vh] fill-black"
      >
        <path
          id="loader"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
      </svg>

      {/* Loader Container */}
      <div className="loader-container z-[99]">
        <div className="loaded text-white uppercase tracking-[8px] text-[1.2rem] font-normal flex">
          {letters.map((char, index) => (
            <span
              key={index}
              className={`animate-loader`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate',
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
