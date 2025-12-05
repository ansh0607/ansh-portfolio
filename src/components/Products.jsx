import React, { useState, useMemo, useCallback, memo } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import video1 from '../videos/Cula_promo_new_4_3.mp4'
import video2 from '../videos/Maniv-Compressed.mp4'
import video3 from '../videos/webflow-education-promo.mp4'
import video4 from '../videos/Arqitel project video 4_3.webm'
import video5 from '../videos/TTR project video 4_3_H.264.webm'
import { FaCode, FaRocket, FaStar } from 'react-icons/fa'

const Products = memo(function Products() {
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
    <div id="products" className='relative bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-900 px-4 sm:px-8 md:px-16 py-8 md:py-16 overflow-hidden' data-scroll-section>
      {/* Background decorations */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float'></div>
        <div className='absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float' style={{ animationDelay: '2s' }}></div>
        <div className='absolute bottom-20 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float' style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Section header */}
      <div className='relative text-center mb-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6'
        >
          <FaStar className='text-purple-400 animate-pulse-slow' />
          <span className='text-purple-300 text-sm font-medium'>Featured Projects</span>
          <FaStar className='text-purple-400 animate-pulse-slow' />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent mb-4'
        >
          Amazing Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-zinc-400 text-lg max-w-2xl mx-auto'
        >
          Explore my latest work featuring cutting-edge technologies and innovative solutions
        </motion.p>
      </div>
      
      {/* Products grid */}
      <div className='relative space-y-8'>
        {sampleItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Product
              title={item.title}
              discription={item.discription}
              live={item.live}
              case={item.case}
              motionItem={motionItem}
              index={index}
              link={item.link}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Video showcase - Desktop only */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block'>
        <div className='absolute left-1/2 transform -translate-x-1/2 w-[20rem] xl:w-[25rem] h-[18rem] xl:h-[23rem] overflow-hidden rounded-2xl border border-purple-500/20 shadow-glow shadow-purple-500/20' style={{ top: '300px', left: '45%' }}>
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: -currentItem }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className='w-full h-full'
          >
            {[
              video4, video5, video3, video1, video2
            ].map((video, index) => (
              <div
                key={index}
                className='w-full h-full'
              >
                <video 
                  src={video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  preload="none" 
                  className='w-full h-full object-cover rounded-2xl'
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
})

export default Products
