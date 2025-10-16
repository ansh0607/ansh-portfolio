import React, { useState } from 'react'
import { motion, useScroll } from 'framer-motion'

function Work() {

    var images = [
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "25%", left: "12%", isActive: true },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "20%", left: "78%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "70%", left: "18%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "75%", left: "75%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "48%", left: "48%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "45%", left: "72%", isActive: false },
    ]

    const [imageStates, setImageStates] = useState(images)
    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
        function imagesShow(arr) {
            setImageStates(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1 ? { ...item, isActive: false } : { ...item, isActive: true }
                ))
            ))
        }

        switch (Math.floor(data * 100)) {
            case 0:
                imagesShow([])
                break;
            case 1:
                imagesShow([0])
                break;
            case 2:
                imagesShow([0, 1])
                break;
            case 3:
                imagesShow([0, 1, 2])
                break;
            case 4:
                imagesShow([0, 1, 2, 3])
                break;
            case 5:
                imagesShow([0, 1, 2, 3, 4])
                break;

        }
    })

    return (
        <div id="work" className='w-full h-[100vh] flex items-center justify-center relative' data-scroll-section>
            <div className='relative max-w-screen-xl mx-auto text-center w-full h-full'>
                <h1 className='text-[25vw] leading-none font-bold select-none text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tighter animate-pulse'>ANSH</h1>
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
                    {imageStates.map(
                        (elem, index) =>
                        (elem.isActive && (
                            <motion.img
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className='absolute w-24 md:w-32 lg:w-36 rounded-xl shadow-2xl'
                                src={elem.url}
                                style={{
                                    top: elem.top,
                                    left: elem.left,
                                    zIndex: Math.floor(Math.random() * 10) + 1
                                }}
                                alt={`Project ${index + 1}`}
                            />)))}
                </div>
            </div>
        </div>
    )
}

export default Work