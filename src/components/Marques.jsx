import React from 'react'
import Maqrue from './Maqrue'

function Marques() {
    const techIcons = [
        "https://cdn.simpleicons.org/react/ffffff",
        "https://cdn.simpleicons.org/javascript/ffffff",
        "https://cdn.simpleicons.org/typescript/ffffff",
        "https://cdn.simpleicons.org/nodedotjs/ffffff",
        "https://cdn.simpleicons.org/html5/ffffff",
        "https://cdn.simpleicons.org/css3/ffffff",
        "https://cdn.simpleicons.org/python/ffffff",
        "https://cdn.simpleicons.org/mongodb/ffffff",
        "https://cdn.simpleicons.org/git/ffffff",
        "https://cdn.simpleicons.org/tailwindcss/ffffff",
    ];
    
  return (
    <div className='py-20' data-scroll-section>
        <Maqrue imgurl={techIcons} />
    </div>
  )
}

export default Marques