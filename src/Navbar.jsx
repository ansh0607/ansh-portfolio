import React, { useState } from 'react'
import Button from './com/Butt'
import { FaBars, FaTimes, FaRocket, FaCode, FaPalette, FaEnvelope } from 'react-icons/fa'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (e, link) => {
        e.preventDefault();
        const element = document.querySelector(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: "Home", link: "#home", icon: FaRocket },
        { name: "Projects", link: "#products", icon: FaCode },
        { name: "Work", link: "#work", icon: FaPalette },
        { name: "Contact", link: "#contact", icon: FaEnvelope }
    ];

    return (
        <nav className='w-full bg-zinc-900/95 backdrop-blur-xl fixed top-0 left-0 z-[99999] border-b border-purple-500/20 shadow-glow'>
            <div className='max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center'>
                <div className='flex items-center space-x-10'>
                    <div className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-glow'>
                        YourLogo
                    </div>
                    <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a 
                                    key={item.name}
                                    href={item.link} 
                                    className='group flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 cursor-pointer relative'
                                    onClick={(e) => handleNavClick(e, item.link)}
                                >
                                    <Icon className='text-purple-400 group-hover:text-purple-300 transition-colors' />
                                    <span className='relative'>
                                        {item.name}
                                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <Button />
                    <button
                        className='md:hidden text-white text-xl p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 border border-purple-500/30'
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes className='animate-pulse' /> : <FaBars className='animate-float' />}
                    </button>
                </div>
            </div>
            
            {/* Mobile menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-purple-500/20 transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className='px-4 py-6 space-y-4 bg-gradient-to-b from-purple-500/5 to-transparent'>
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <a 
                                key={item.name}
                                href={item.link} 
                                className='group flex items-center gap-3 text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 cursor-pointer py-3 px-4 rounded-lg hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20'
                                onClick={(e) => handleNavClick(e, item.link)}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Icon className='text-purple-400 group-hover:text-purple-300 transition-colors text-lg' />
                                <span className='relative'>
                                    {item.name}
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar