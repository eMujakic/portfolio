import React from 'react'
import Landing from './landing/page'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className={`h-full flex w-full flex-col`}>
        <Landing />
      </main>
    </div>
  )
}

export default Home