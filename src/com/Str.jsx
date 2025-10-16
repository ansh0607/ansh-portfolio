import React from 'react'


function Str({url,number}) {
  return (
    <div className='w-[20.66%] py-4 px-6 border-t-1 border-b-1 border-r-1 border-zinc-600  flex justify-between items-center '>
      <img src={url} alt="" />
      <p>{number}</p>
    </div>
  )
}

export default Str