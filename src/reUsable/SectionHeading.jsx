import React from 'react';
import RevealText from './RevealText';

export default function SectionHeading({ tag, title, className = '' }) {
  return (
    <div className={`space-y-5 mr-auto ${className}`}>
      <span className="text-gray-500 bg-white px-6 py-2 text-lg rounded-full">
        {tag}
      </span>
      <RevealText text={title} >
        
      </RevealText>
    </div>
  );
}


 

