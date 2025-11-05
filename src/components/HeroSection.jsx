import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import hand from '../assets/img/hand.svg';
import banner from '../assets/img/hero/banner.png';
import Buttons from '../reUsable/Buttons';


const HeroSection = () => {

  const [text] = useTypewriter({
    words: ['Product Design', 'UI/UX Design', 'Visual Design'],
    loop: 0, // Infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });


  return (
    <section id="home" className="pt-36 pb-20 w-11/12 md:w-[90%]  mx-auto min-h-screen">
      
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          {/* Left Area */}
          <div className="lg:w-8/12 w-full">
            <div className=" space-y-10">
              <div className=" space-y-10">
                {/* Sub Title */}
                <span className=" inline-flex items-center gap-3 text-2xl  animate__animated animate__fadeInDown delay-500">
                  <img src={hand} alt="Hand Icon" className="" /> Hello There!
                </span>

                {/* Main Title */}
                <h2 className="text-5xl md:text-6xl lg:text-[90px] font-bold  animate__animated animate__fadeInLeft delay-1000 slower">
                  I'm Jhon Harrington
                </h2>

                
                 {/* Typewriter effect */}
          <h2 className="text-2xl animate__animated animate__fadeInUp animate__delay-2s animate__slower  text-gray-500 font-medium mt-2">
            Creating impactful experiences on {text}<Cursor cursorStyle="|" />
          </h2>
              </div>

              {/* Hire Me Button */}
  
              <Buttons
                text="Hire me"
                className="animate__animated animate__fadeInUp animate__delay-3s mt-2 "
              />
            </div>
          </div>

          {/* Right Area */}
          <div className="md:w-5/12  mt-10 lg:mt-0 text-center lg:text-right animate__animated animate__fadeInRight delay-2000 relative">
            <img src={banner} alt="Hero" className="w-full h-auto" />

              <svg viewBox="0 0 200 200" className="top-0 -left-4 w-36 h-36 absolute   rounded-full backdrop-blur bg-opacity-80 bg-[rgb(155,153,150)]  spinner">
                <defs>
                  <path id="textcircle" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
                </defs>
                <text className="text-xl font-medium tracking-[0.2em]">
                  <textPath fill='white' xlinkHref="#textcircle" startOffset="0%">
                    ✦ PORTFOLIO ✦ CREATIVE ✦ SIMPLICITY
                  </textPath>
                </text>
              </svg>
           
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection;
