"use client"

import React, { useState } from 'react'
import Landing from './landing/page'
import Navbar from '@/components/Navbar'

const Home = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <main className={`h-full flex w-full flex-col`}>
        <Landing />
      </main>
    </div>
  )
}

export default Home