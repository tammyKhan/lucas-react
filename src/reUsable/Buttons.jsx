import React from 'react';
import { PiArrowUpRightThin } from 'react-icons/pi';

const Buttons = ({ text, className = '' }) => {
  return (
     <div className={`py-4 w-56 text-center bg-black text-white  rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 ${className}`}>
                <a
                  href="#0"
                  className="inline-flex items-center gap-2 "
                >
                  {text}
                  <PiArrowUpRightThin size={16} className='stroke-[6]' />

                </a>
              </div>
  );
};

export default Buttons;