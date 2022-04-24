import React from 'react'
import gallery1 from '../images/gallery-1.jpg'
import gallery2 from '../images/gallery-2.jpg'
import gallery3 from '../images/gallery-3.jpg'
import gallery4 from '../images/gallery-4.jpg'
import gallery5 from '../images/img-2.jpg'
import gallery6 from '../images/gallery-6.jpg'
const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Most beautiful Places in Uttarakhand</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">do you wanna see some beautifull places before die ..habbibi come to Uttarakhand </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={gallery1}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={gallery2}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={gallery3}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={gallery4}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={gallery5}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={gallery6}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gallery