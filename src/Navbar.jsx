import React from 'react'
import Button from './com/Butt'


function Navbar() {
    return (
        <nav className='w-full bg-zinc-900/95 backdrop-blur-md fixed top-0 left-0 z-[99999] border-b border-zinc-800'>
            <div className='max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center'>
                <div className='flex items-center space-x-10'>
                    <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
                        YourLogo
                    </div>
                    <div className='hidden md:flex items-center space-x-8'>
                        {[
                            { name: "Home", link: "#home" },
                            { name: "Projects", link: "#products" },
                            { name: "Work", link: "#work" },
                            { name: "Contact", link: "#contact" }
                        ].map((item) => (
                            <a 
                                key={item.name}
                                href={item.link} 
                                className='text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector(item.link);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <Button />
            </div>
        </nav>
    )
}

export default Navbar