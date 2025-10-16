import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div id="contact" className='w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border-t border-zinc-700'>
            <div className='max-w-screen-xl mx-auto px-4 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                    {/* Brand Section */}
                    <div className='space-y-4'>
                        <div className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
                            ANSH
                        </div>
                        <p className='text-zinc-400 text-sm leading-relaxed'>
                            Creating innovative digital experiences through code and design.
                            Passionate about building modern web applications.
                        </p>
                        <div className='flex space-x-4'>
                            <a href="https://github.com" className='text-zinc-400 hover:text-white transition-colors duration-300'>
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com" className='text-zinc-400 hover:text-white transition-colors duration-300'>
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://twitter.com" className='text-zinc-400 hover:text-white transition-colors duration-300'>
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" className='text-zinc-400 hover:text-white transition-colors duration-300'>
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h4 className='text-white font-semibold text-lg'>Quick Links</h4>
                        <div className='space-y-2'>
                            {[
                                { name: "Home", link: "#home" },
                                { name: "Projects", link: "#products" },
                                { name: "Work", link: "#work" },
                                { name: "Contact", link: "#contact" }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    className='block text-zinc-400 hover:text-white transition-colors duration-200 text-sm'
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

                    {/* Contact Info */}
                    <div className='space-y-4'>
                        <h4 className='text-white font-semibold text-lg'>Get In Touch</h4>
                        <div className='space-y-2 text-sm text-zinc-400'>
                            <p>📧 ansh@example.com</p>
                            <p>📱 +91 12345 67890</p>
                            <p>📍 Mumbai, India</p>
                        </div>
                        <button className='mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
                            Say Hello
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='pt-8 border-t border-zinc-700'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                        <p className='text-zinc-500 text-sm'>
                            © 2024 Ansh. Built with React & Tailwind CSS.
                        </p>
                        <div className='flex space-x-6 text-xs text-zinc-500'>
                            <a href="#" className='hover:text-white transition-colors'>Privacy Policy</a>
                            <a href="#" className='hover:text-white transition-colors'>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer