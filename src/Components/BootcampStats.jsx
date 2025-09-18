import React, { useState, useEffect, useRef } from 'react'

const BootcampStats = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({ applicants: 0, projects: 0, certificates: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const finalNumbers = {
    applicants: 150,
    projects: 50,
    certificates: 30
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate each number
          Object.keys(finalNumbers).forEach((key) => {
            let current = 0;
            const target = finalNumbers[key];
            const increment = target / 100; // Duration control
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              setAnimatedNumbers(prev => ({
                ...prev,
                [key]: Math.floor(current)
              }));
            }, 20);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-pink-500 mb-4">Last Year's Numbers</h3>
        <div className="w-32 h-1 bg-pink-500 mx-auto mb-8"></div>
        
        <p className="text-white text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          As the club was founded in 2024, our previous season was the first season and we organized our first Bootcamp then, and here is what we accomplished:
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Applicants */}
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-pink-500 to-pink-700 flex flex-col items-center justify-center text-white shadow-2xl border-4 border-pink-400">
            <div className="text-6xl font-bold mb-4">{animatedNumbers.applicants}+</div>
            <div className="text-2xl font-semibold">Applicants</div>
          </div>
          
          {/* Projects */}
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-yellow-500 to-yellow-700 flex flex-col items-center justify-center text-white shadow-2xl border-4 border-yellow-400">
            <div className="text-6xl font-bold mb-4">{animatedNumbers.projects}+</div>
            <div className="text-2xl font-semibold">Projects</div>
          </div>
          
          {/* Certificates */}
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex flex-col items-center justify-center text-white shadow-2xl border-4 border-cyan-400">
            <div className="text-6xl font-bold mb-4">{animatedNumbers.certificates}+</div>
            <div className="text-2xl font-semibold">Certificates</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BootcampStats