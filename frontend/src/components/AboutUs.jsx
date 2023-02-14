import React from 'react'
import usabout from '../img/usabout.jpeg'

const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src= {usabout} />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Dr.Priyanka Gupta</h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">We focus on getting you the best tutors around you.</p>
                </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">Education is the key aspect in a learner’s life. Have running a set of successful private schools, tuition centres, training centres and publications since 1980, the QS team decided to expand their expertise to a wider audience and have developed tutorfinder. We feel that education is the most important asset a parent can give their child. We believe in providing good quality tutoring for all members of the community.


Having had a vast amount of experience in teaching and tutoring the team have now decided to provide an opportunity to a wider pool of tutors and students. The reason for this opportunity is to meet the needs of the current clients and tutors, where they require a lot of flexibility when it comes to teaching and learning.


We provide personalized one to one lessons to cater for your child’s needs. Tutorfinder provides high quality tuition to help pupils gain confidence and self-esteem to achieve outstanding results. In addition to helping pupils overcome their difficulties, we also focus on developing basic study skills to maximize their performance.


Our highly qualified and experienced tutors at tutorfinder aim to provide a supportive environment to help pupils strengthen their understanding and knowledge. We are dedicated and committed to inspiring students to reach their full potential. Tutorfinder caters for individual needs by understanding the student's requirements and requests.</p>
                <a className="text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs