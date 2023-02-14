import React from 'react'
import tutor1 from '../img/tutor1.avif'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We Help Students and Tutors Find Each Other
            <br className="hidden lg:inline-block" />Learn from Experts
            </h1>
            <p className="mb-8 leading-relaxed">Our tutors have performed exceptionally well in the exams that they tutor. All of our tutors have met or exceeded our minimum requirements to become a tutor. We set an extremely high bar for our tutor applicants, ensuring that we only put our students in the most-qualified hands.</p>
            <div className="flex justify-center">
            <a href="register"><button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Signup</button></a>
            <a href="login"><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Login</button></a>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={tutor1} />
        </div>
        </div>
    </section>
  )
}

export default Hero