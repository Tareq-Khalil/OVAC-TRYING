import React from 'react'

const BootcampEligibility = () => {
  const requirements = [
    {
      title: "Arabic Language Proficiency",
      description: "All the content will be explained in Egyptian Arabic",
      icon: "🗣️",
      color: "from-pink-500 to-pink-700",
      borderColor: "border-pink-400"
    },
    {
      title: "High School Student", 
      description: "Applicants must be between grade 9 and grade 12",
      icon: "🎓",
      color: "from-yellow-500 to-yellow-700", 
      borderColor: "border-yellow-400"
    },
    {
      title: "Stable Internet Connection",
      description: "The program will be held through online meetings",
      icon: "🌐",
      color: "from-cyan-500 to-cyan-700",
      borderColor: "border-cyan-400"
    },
    {
      title: "Previous Knowledge IS NOT Required",
      description: "You can have your first experience with us, with no need for previous visual art skills",
      icon: "💡",
      color: "from-pink-500 to-purple-700",
      borderColor: "border-pink-400"
    }
  ];

  return (
    <div className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-yellow-400 text-center mb-4">Program Eligibility</h3>
        <div className="w-48 h-1 bg-yellow-400 mx-auto mb-16"></div>
        
        <div className="space-y-8">
          {requirements.map((req, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {index % 2 === 0 ? (
                // Left aligned (odd items)
                <>
                  <div className={`bg-gradient-to-r ${req.color} rounded-full p-6 flex items-center justify-center text-4xl border-4 ${req.borderColor} shadow-2xl`}>
                    {req.icon}
                  </div>
                  <div className={`ml-8 bg-gradient-to-r ${req.color} rounded-full px-8 py-6 max-w-md border-4 ${req.borderColor} shadow-2xl`}>
                    <h4 className="text-xl font-bold text-white mb-2">{req.title}</h4>
                    <p className="text-white text-sm">{req.description}</p>
                  </div>
                </>
              ) : (
                // Right aligned (even items)  
                <>
                  <div className={`mr-8 bg-gradient-to-l ${req.color} rounded-full px-8 py-6 max-w-md border-4 ${req.borderColor} shadow-2xl text-right`}>
                    <h4 className="text-xl font-bold text-white mb-2">{req.title}</h4>
                    <p className="text-white text-sm">{req.description}</p>
                  </div>
                  <div className={`bg-gradient-to-l ${req.color} rounded-full p-6 flex items-center justify-center text-4xl border-4 ${req.borderColor} shadow-2xl`}>
                    {req.icon}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BootcampEligibility