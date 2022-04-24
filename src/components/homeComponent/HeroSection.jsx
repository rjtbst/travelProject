import React from 'react'
import homeImage from '../images/home-bg-1.jpg'
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font" >
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg">
      <div className="w-full  mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={homeImage}/>
      </div> 
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><h5 className='font-normal'>Never Stop </h5>
           <h3 className=' text-green-800 font-medium text-6xl'> Exploring</h3>
        </h1>
        <p className="mb-8 leading-relaxed">There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-green-800  outline py-2 px-6 focus:outline hover:bg-green-800 hover:text-white rounded text-lg">Get Started</button>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection