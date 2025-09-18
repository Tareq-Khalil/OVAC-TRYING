import React from 'react'

const BootcampHero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 relative z-10">
      <div className="border-4 border-cyan-400 rounded-3xl p-16 max-w-4xl w-full text-center bg-black/20 backdrop-blur-sm">
        <h1 className="text-6xl md:text-7xl font-bold mb-8">
          <span className="text-white">OCTOBER</span><br/>
          <span className="text-white">V</span><span className="text-pink-500">I</span><span className="text-white">SUAL </span>
          <span className="text-yellow-400">ARTS</span><br/>
          <span className="text-cyan-400">BOOTCAMP</span>
        </h1>
        
        <p className="text-yellow-400 text-xl mb-8 font-medium">
          Acquire creative visual arts skills through our 5-week online program
        </p>
        
        <div className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full inline-block mb-8 cursor-pointer transition-colors text-xl font-bold">
          APPLY NOW
        </div>
        
        <p className="text-white text-lg">
          Registration Deadline: <span className="text-yellow-400 font-semibold">September 20, 2025</span>
        </p>
      </div>
    </div>
  )
}

export default BootcampHero