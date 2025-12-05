import React, { memo, useCallback } from 'react'
import Button from '../com/Butt'
import { FaExternalLinkAlt, FaGithub, FaRocket } from 'react-icons/fa'

const Product = memo(function Product({ title, discription, live, case: caseFlag ,motionItem,index, link} ) {
  const handleMouseEnter = useCallback(() => {
    motionItem(index);
  }, [motionItem, index]);

  return (
    <div className='group relative w-full py-6 sm:py-8 md:py-10 min-h-[20rem] md:h-[23rem] text-white hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-pink-500/5 transition-all duration-300 overflow-hidden'>
      {/* Background decoration - simplified */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl'></div>
      </div>
      
      <div 
        onMouseEnter={handleMouseEnter}
        className='relative max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 px-4'
      >
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-bold bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300 transform'>
            {title}
          </h1>
        </div>
        
        <div className='w-full lg:w-1/3 text-center lg:text-left space-y-4'>
          <p className='text-sm sm:text-base text-zinc-300 leading-relaxed'>
            {discription}
          </p>
          
          <div className='flex items-center justify-center lg:justify-start gap-3'>
            <Button link={link} />
          </div>
        </div>
      </div>
    </div>
  )
})

export default Product