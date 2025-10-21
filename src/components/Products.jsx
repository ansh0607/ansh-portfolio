import React, { useState, useMemo, useCallback } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import video1 from '../videos/Cula_promo_new_4_3.mp4'
import video2 from '../videos/Maniv-Compressed.mp4'
import video3 from '../videos/webflow-education-promo.mp4'
import video4 from '../videos/Arqitel project video 4_3.webm'
import video5 from '../videos/TTR project video 4_3_H.264.webm'











function Products() {
  const sampleItems = useMemo(() => [
    { title: 'Ai code ', discription: 'Built an AI Code Builder using React, Tailwind CSS, and OpenAI API, enabling users to generate and edit code through natural language prompts. Integrated dynamic UI and API handling for seamless real-time code generation.', live: true, case: false, link: 'https://ansh0607.github.io/Ai-code/' },
    { title: 'PROTFOLIO', live: true, case: false, discription: 'Developed an animated portfolio website using React, Framer Motion, and Locomotive Scroll for smooth transitions and parallax effects. Integrated Git for version control and delivered a visually engaging, high-performance interactive user experience.' },
    { title: 'Expence tracker', live: true, case: false, discription: 'Developed a Expence tracker using the MERN stack (MongoDB, Express, React, Node.js) to manage books, users, and transactions. Implemented secure authentication, CRUD operations, and an intuitive dashboard for efficient library administration.',link: 'https://ansh0607.github.io/expence/' },
    { title: 'Ad.todo', live: true, case: false, discription: 'Built an Advanced To-Do Application with React and Framer Motion, featuring smooth animations for adding, updating, and deleting tasks. Implemented interactive UI elements, state management, and responsive design for an engaging user experience.',link: 'https://ansh0607.github.io/Ad.todo/' },
    { title: 'deacthlon', live: true, case: false, discription: 'Developed a Deacthlon website using React, Framer Motion, and Locomotive Scroll for smooth transitions and parallax effects. Integrated Git for version control and delivered a visually engaging, high-performance interactive user experience.',link: 'https://ansh0607.github.io/deacthlon/' },
  ], [])
  
  const [currentItem, setCurrentItem] = useState(0)
  
  const motionItem = useCallback((item, index) => {
    setCurrentItem(item * 23);
  }, [])

  return (
    <div id="products" className='bg-zinc-900 p-16 relative' data-scroll-section>
      {
        sampleItems.map((item, index) => (
          <Product
            key={index}
            title={item.title}
            discription={item.discription}
            live={item.live}
            case={item.case}
            motionItem={motionItem}
            index={index}
            link={item.link}
            
          />
        ))
      }
      <div className='absolute top-6 left-0 w-full h-full  pointer-events-none'>
        
        <motion.div initial={{ y: currentItem , x:"-1%"}}
          animate={{ y: currentItem +"rem"}}
          transition={{ease: [0.76, 0, 0.24,1],duration: .3}}
          
         className='window absolute mt-10 w-[25rem] h-[23rem] -translate-x-[50%] left-[46%] overflow-hidden '  >
          <motion.div transition={{ease: [0.76, 0, 0.24,1],duration: .6}} animate={{ y: -currentItem +"rem"}} className='w-full h-full '>
            <video src={video4} autoPlay loop muted playsInline preload="metadata" className='w-full h-full object-cover'></video>
          </motion.div>
          <motion.div transition={{ease: [0.76, 0, 0.24,1],duration: .6}} animate={{ y: -currentItem +"rem"}} className='w-full h-full'>
            <video src={video5} autoPlay loop muted playsInline preload="metadata" className='w-full h-full object-cover'></video>
          </motion.div>
          <motion.div transition={{ease: [0.76, 0, 0.24,1],duration: .6}} animate={{ y: -currentItem +"rem"}} className='w-full h-full'>
            <video src={video3} autoPlay loop muted playsInline preload="metadata" className='w-full h-full object-cover'></video>
          </motion.div>
          <motion.div transition={{ease: [0.76, 0, 0.24,1],duration: .6}} animate={{ y: -currentItem +"rem"}} className='w-full h-full'>
            <video src={video1} autoPlay loop muted playsInline preload="metadata" className='w-full h-full object-cover'></video>
          </motion.div>
          <motion.div transition={{ease: [0.76, 0, 0.24,1],duration: .6}} animate={{ y: -currentItem +"rem"}} className='w-full h-full'>
            <video src={video2} autoPlay loop muted playsInline preload="metadata" className='w-full h-full object-cover'></video>
          </motion.div>
      
        </motion.div>   
      </div>
    </div>
  )
}

export default Products
