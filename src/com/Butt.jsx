import React, { memo } from 'react'
import { FaArrowRight, FaStar } from "react-icons/fa";

function Button({ link }) {
  const buttonContent = (
    <div className='group relative inline-flex items-center h-10 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border border-purple-500/50 rounded-full w-auto whitespace-nowrap overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow hover:shadow-purple-500/30'>
      {/* Background animation */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
      
      {/* Content */}
      <span className='relative z-10 font-medium text-sm flex items-center gap-2'>
        <FaStar className='animate-pulse-slow text-yellow-300' />
        <span>View Project</span>
        <FaArrowRight className='transform group-hover:translate-x-1 transition-transform duration-300' />
      </span>
      
      {/* Border glow effect */}
      <div className='absolute inset-0 rounded-full border border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow'></div>
    </div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className='inline-block'
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

export default Button