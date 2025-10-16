import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Card({width, start, para, hover}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <motion.div whileHover={{padding:"25px",  backgroundColor: start ? "#7443ff" : "#7443ff", cursor:"pointer"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3>{start ? 'Get In Touch' : 'one hading'}</h3>
                    <FaArrowRightLong />
                </div>
                <h1 className='text-3xl font-medium mt-5'>{start ? 'Contact Us' : 'who we are'}</h1>
            </div>
            <div className='down w-full'>
                {
                    start && (
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full bg-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Your Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full bg-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name='message'
                                    placeholder='Your Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows='4'
                                    className='w-full bg-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none'
                                    required
                                />
                            </div>
                            <button 
                                type='submit'
                                className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full py-3 px-6 transition-all duration-300 transform hover:scale-105'
                            >
                                Send Message
                            </button>
                        </form>
                    ) 
                }
                {para && (
                     <p className='text-sm text-zinc-400 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                )}
            </div>
        </motion.div>
    )
}
export default Card