import React from 'react'
import image1 from '../images/category-1.jpg'
import kayaking from '../images/img-1.jpg';
import zipline from '../images/category-2.jpg'
const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 ml-2">Adventure Idea!</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-2 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img alt='bungee' src={image1} className="w-40 h-40 rounded-full"></img>
            </div>
            <div className="flex-grow">
              <h2 className="text-green-800 text-lg title-font font-bold mb-3">Bungee Jump</h2>
              <p className="leading-relaxed text-base">because the things you are scared of  areusually the worthwhile</p>
              <button className="inline-flex text-green-800  outline py-2 px-6 mt-4 focus:outline hover:bg-green-800 hover:text-white rounded text-lg">Learn More</button>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img alt='bungee' src={kayaking}  className="w-40 h-40 rounded-full" viewBox="0 0 24 24">
           
          </img>
        </div>
        <div className="flex-grow">
          <h2 className="text-green-800 text-lg title-font font-bold mb-3">kayaking</h2>
          <p className="leading-relaxed text-base">because the things you are scared of  areusually the worthwhile</p>
            <button className="inline-flex text-green-800  outline py-2 px-6 mt-4 focus:outline hover:bg-green-800 hover:text-white rounded text-lg">Learn More</button>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img alt='bungee' src={zipline}  className="w-40 h-40 rounded-full" viewBox="0 0 24 24">
           
          </img>
        </div>
        <div className="flex-grow">
          <h2 className="text-green-800 text-lg title-font font-bold mb-3">Zipline</h2>
          <p className="leading-relaxed text-base">because the things you are scared of  areusually the worthwhile</p>
          <button className="inline-flex text-green-800  outline py-2 px-6 mt-4 focus:outline hover:bg-green-800 hover:text-white rounded text-lg">Learn More</button>
        </div>
      </div>
          
</div>
      
    </div>
</section >
    )
}

export default Content