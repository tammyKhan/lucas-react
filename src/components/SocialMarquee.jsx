import React from 'react';
import Marquee from 'react-fast-marquee';

// Social icons import
import social1 from '../assets/img/social/1.svg';
import social2 from '../assets/img/social/2.svg';
import social3 from '../assets/img/social/3.svg';
import social4 from '../assets/img/social/4.svg';
import social5 from '../assets/img/social/5.svg';

const socialIcons = [social1, social2, social3, social4, social5];

const SocialMarquee = () => {
  return (
    <div className="overflow-hidden py-10 my-6 w-11/12 md:w-[90%]  mx-auto">
      <Marquee 
        gradient={false} 
        speed={100} 
        pauseOnHover={true} 
        className="flex items-center "
      >
        {Array(3).fill(socialIcons).flat().map((icon, index) => (
          <div key={index} className="flex-shrink-0 mx-10">
            <a href="#0" className="inline-block p-3">
              <img src={icon} alt={`Social ${index + 1}`} className="" />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SocialMarquee;
