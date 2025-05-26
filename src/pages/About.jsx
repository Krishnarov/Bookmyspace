import React from 'react'
import Footer from '../components/Footer'
import HeroHead from '../components/HeroHead'

function About() {
  return (
     <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <HeroHead text={"About"}/>
          <section>
            about
          </section>


           <Footer/>

    </div>
  )
}

export default About