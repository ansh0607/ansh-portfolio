import React, { memo } from 'react'
import Button from '../com/Butt'

const Product = memo(function Product({ title, discription, live, case: caseFlag ,motionItem,index, link} ) {
  return (
    <div className='  w-full py-10 h-[23rem] text-white  hover:bg-slate-800'>
           <div onMouseEnter={() => {
            motionItem(index)
           }} onMouseLeave={() => {}}  className='max-w-screen-xl mx-auto  flex items-center justify-between'>
                      <h1 className='text-6xl  capitalize font-bold hover:scale-110 transition-all '>
                        {title}
                        
                      </h1>
                      <div className='w-1/3'>
                        <p className='mb-10'>{discription}</p>
                        <Button link={link}/>
                      </div>
           </div>
    </div>
  )
})

export default Product