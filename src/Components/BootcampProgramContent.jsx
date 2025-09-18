import React from 'react'

const BootcampProgramContent = () => {
  return (
    <div className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-cyan-400 text-center mb-4">Program Content</h3>
        <div className="w-48 h-1 bg-cyan-400 mx-auto mb-12"></div>
        
        <p className="text-white text-lg text-center mb-20 max-w-4xl mx-auto leading-relaxed">
          The program consists of 6 specialized training sessions + two practical workshops. Students will hand practical tasks after each session to ensure comprehension. At the end, students will work on their final projects.
        </p>

        {/* Connecting Lines Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-yellow-400 opacity-60"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-yellow-400 opacity-60"></div>
          
          {/* Vertical lines */}
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-yellow-400 opacity-60"></div>
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-yellow-400 opacity-60"></div>
          
          {/* Diagonal connecting curves */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800" fill="none">
            <path d="M200 200 Q400 150 600 200" stroke="#facc15" strokeWidth="2" opacity="0.6" fill="none"/>
            <path d="M600 200 Q750 250 800 400" stroke="#facc15" strokeWidth="2" opacity="0.6" fill="none"/>
            <path d="M800 400 Q750 550 600 600" stroke="#facc15" strokeWidth="2" opacity="0.6" fill="none"/>
            <path d="M600 600 Q400 650 200 600" stroke="#facc15" strokeWidth="2" opacity="0.6" fill="none"/>
            <path d="M200 600 Q150 450 200 200" stroke="#facc15" strokeWidth="2" opacity="0.6" fill="none"/>
          </svg>
          
          {/* Connection dots */}
          <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-yellow-400 rounded-full border-2 border-transparent outline outline-2 outline-yellow-400"></div>
          <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-yellow-400 rounded-full border-2 border-transparent outline outline-2 outline-yellow-400"></div>
          <div className="absolute top-1/2 left-1/12 w-3 h-3 bg-yellow-400 rounded-full border-2 border-transparent outline outline-2 outline-yellow-400"></div>
          <div className="absolute top-1/2 right-1/12 w-3 h-3 bg-yellow-400 rounded-full border-2 border-transparent outline outline-2 outline-yellow-400"></div>
        </div>

        {/* Program Cards Grid */}
        <div className="relative z-10 space-y-16">
          
          {/* Row 1: Photo Manipulation (Left) */}
          <div className="flex justify-start">
            <div className="w-96 bg-gradient-to-br from-pink-600 to-pink-800 rounded-3xl p-8 shadow-2xl border-4 border-pink-400 relative">
              {/* Photoshop Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-2xl">Ps</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white text-center mb-4">Photo Manipulation</h4>
              
              <div className="flex justify-center gap-3 mb-6">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">2 Sessions</span>
                <span className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">1 Workshop</span>
              </div>
              
              <p className="text-white text-center leading-relaxed">
                In-depth exploration of Adobe Photoshop tools to create manipulated photographs. 
                Participants will work different Photoshop tasks under the guidance of their mentors.
              </p>
            </div>
          </div>

          {/* Row 2: 3D Design (Right) */}
          <div className="flex justify-end">
            <div className="w-96 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-3xl p-8 shadow-2xl border-4 border-yellow-400 relative">
              {/* Blender Icon */}
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6 mx-auto relative">
                <div className="w-8 h-8 bg-blue-500 rounded-full relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-white text-center mb-4">3D Design</h4>
              
              <div className="flex justify-center mb-6">
                <span className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">1 Session</span>
              </div>
              
              <p className="text-white text-center leading-relaxed">
                Basics of Blender interface and key tools for any project. 
                Students will create 3D models with different materials and realistic elements.
              </p>
            </div>
          </div>

          {/* Row 3: Video Editing (Center) */}
          <div className="flex justify-center">
            <div className="w-96 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-3xl p-8 shadow-2xl border-4 border-cyan-400 relative">
              {/* Premiere Pro Icon */}
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-2xl">Pr</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white text-center mb-4">Video Editing</h4>
              
              <div className="flex justify-center mb-6">
                <span className="bg-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold">1 Session</span>
              </div>
              
              <p className="text-white text-center leading-relaxed">
                In-depth exploration of editing and controlling videos with Adobe Premiere Pro. 
                Students will use advanced video effects like key frames and animations.
              </p>
            </div>
          </div>

          {/* Row 4: Animation (Left) */}
          <div className="flex justify-start">
            <div className="w-96 bg-gradient-to-br from-pink-600 to-purple-800 rounded-3xl p-8 shadow-2xl border-4 border-pink-400 relative">
              {/* After Effects Icon placeholder */}
              <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-2xl">Ae</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white text-center mb-4">Animation</h4>
              
              <div className="flex justify-center gap-3 mb-6">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">2 Sessions</span>
                <span className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">1 Workshop</span>
              </div>
              
              <p className="text-white text-center leading-relaxed">
                Students will learn the basics of 2D animation with Adobe Animate and Adobe After Effects. 
                They will animate simple characters and move different body parts with some aura and light effects.
              </p>
            </div>
          </div>

          {/* Empty Cards for you to fill */}
          
          {/* Row 5: Empty Card 1 (Right) */}
          <div className="flex justify-end">
            <div className="w-96 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-3xl p-8 shadow-2xl border-4 border-purple-400 relative">
              {/* Empty Icon placeholder */}
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-2xl">?</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white text-center mb-4">[Card Title]</h4>
              
              <div className="flex justify-center mb-6">
                <span className="bg-gray-400 text-black px-4 py-2 rounded-full text-sm font-bold">[Sessions]</span>
              </div>
              
              <p className="text-white text-center leading-relaxed">
                [Add your content description here]
              </p>
            </div>
          </div>

          {/* Row 6: Empty Card 2 (Center) */}
          <div className="flex justify-center">
            <div className="w-96 bg-gradient-to-br from-green-600 to-emerald-800 rounded-3xl p-8 shadow-2xl border-4 border-green-400 relative">
              {/* Empty Icon placeholder */}
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-2xl">?</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white text-center mb-4">[Card Title]</h4>
              
              <div className="flex justify-center gap-3 mb-6">
                <span className="bg-gray-400 text-black px-4 py-2 rounded-full text-sm font-bold">[Sessions]</span>
                <span className="bg-gray-400 text-black px-4 py-2 rounded-full text-sm font-bold">[Workshops]</span>
              </div>
              
              <p className="text-white text-center leading-relaxed">
                [Add your content description here]
              </p>
            </div>
          </div>

          {/* Row 7: Empty Card 3 (Left) */}
          <div className="flex justify-start">
            <div className="w-96 bg-gradient-to-br from-orange-600 to-red-800 rounded-3xl p-8 shadow-2xl border-4 border-orange-400 relative">
              {/* Empty Icon placeholder */}
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-2xl">?</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white text-center mb-4">[Card Title]</h4>
              
              <div className="flex justify-center mb-6">
                <span className="bg-gray-400 text-black px-4 py-2 rounded-full text-sm font-bold">[Sessions]</span>
              </div>
              
              <p className="text-white text-center leading-relaxed">
                [Add your content description here]
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BootcampProgramContent