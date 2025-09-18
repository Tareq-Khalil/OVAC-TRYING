import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import StarField from '../Components/StarField'
import BootcampHero from '../Components/BootcampHero'
import BootcampStats from '../Components/BootcampStats'
import BootcampEligibility from '../Components/BootcampEligibility'
import BootcampProgramContent from '../Components/BootcampProgramContent'

const Bootcamp = () => {
  return (
    <div className='bg-black min-h-screen'>
      <NavBar />
      <StarField />
      <BootcampHero />
      <BootcampStats />
      <BootcampEligibility />
      <BootcampProgramContent />
      <Footer />
    </div>
  )
}

export default Bootcamp