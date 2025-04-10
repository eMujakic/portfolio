"use client"

import { NavbarProps } from '@/lib/types'
import React, { useEffect } from 'react'

const Navbar: React.FC<NavbarProps> = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex md:justify-center justify-end items-center h-16'>
                {/* <a href="#home" className='text-xl font-medium text-white'>Ernad</a> */}


                <div className={`font-bold w-7 h-5 relative cursor-pointer z-40 md:hidden ${menuOpen ? 'hidden' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </div>

                <div className='hidden md:flex items-center space-x-14'>
                    <a href="#home" className='text-gray-300 hover:text-white transition-colors'>Home</a>
                    <a href="#about" className='text-gray-300 hover:text-white transition-colors'>About</a>
                    <a href="#projects" className='text-gray-300 hover:text-white transition-colors'>Projects</a>
                    <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>Weather</a>
                    <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar