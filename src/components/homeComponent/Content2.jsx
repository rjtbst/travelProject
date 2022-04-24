import React from 'react'
import sunset from '../images/about-img.jpg'
const Content2 = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-green-800">Memorable Outdoor Experience
        
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
      <button className="inline-flex text-green-800  outline py-2 px-6 focus:outline hover:bg-green-800 hover:text-white rounded text-lg">Read More</button>
      </div>
    </div>
    <div className="lg:max-w-xl lg:w-full md:w-1/3 w-5/6">
      <img className="object-cover object-center rounded-md " alt="hero" src={sunset}/>
    </div>
  </div>
</section>
  )
}

export default Content2