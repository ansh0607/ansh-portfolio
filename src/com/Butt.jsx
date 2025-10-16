import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Button({ link }) {
  const buttonContent = (
    <div className='inline-flex items-center h-8 px-3 py-1 bg-zinc-100 text-black border border-zinc-100 rounded-full w-auto whitespace-nowrap'>
       <span className='font-medium text-sm flex items-center gap-2'>View Project
        <FaArrowRight/>
        </span>
     
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

export default Button