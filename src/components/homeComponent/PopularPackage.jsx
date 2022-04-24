import React from 'react'
import package1 from '../images/img-1.jpg'
import package2 from '../images/img-2.jpg'
import package3 from '../images/img-3.jpg'

const PopularPackage = () => {
    return (
        <section class="text-gray-600 body-font" >
            <div className='text-center mb-1'>
                <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-1 ml-2">Popular Package</h1>
            </div>

            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full border-green-800 border-2 mr-3 ml-auto hover:bg-slate-400">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={package1} />
                        </a>
                        <div class="mt-4 text-center">
                            <h3 class="text-black text-lg font-bold tracking-widest title-font mb-1">Nainital</h3>
                            <h2 class="text-black title-font text-base font-medium">Nainital, Sattal, Mukteswar, Bhalugarh waterfall</h2>
                            <h3 class="text-green-800 text-lg font-bold tracking-widest title-font mb-1">Rs 5000</h3>
                            <button className="inline-flex text-green-800  outline py-2 px-6 focus:outline hover:bg-green-800 hover:text-white rounded text-base mt-1">Explore Now</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full border-green-800 hover:bg-slate-400 border-2 mr-3">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={package2} />
                        </a>
                        <div class="mt-4 text-center">
                            <h3 class="text-black text-lg font-bold tracking-widest title-font mb-1">Adi Kailash</h3>
                            <h2 class="text-black title-font text-base font-medium">Lipu lekh, Adi Kailash, Panchachuli, Om-Parvat</h2>
                            <h3 class="text-green-800 text-lg font-bold tracking-widest title-font mb-1">Rs 5000</h3>
                            <button className="inline-flex text-green-800  outline py-2 px-6 focus:outline hover:bg-green-800 hover:text-white rounded text-base mt-1">Explore Now</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full border-green-800 hover:bg-slate-400 border-2 mr-auto">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={package3} />
                        </a>
                        <div class="mt-4 text-center">
                            <h3 class="text-black text-lg font-bold tracking-widest title-font mb-1">4 dham</h3>
                            <h2 class="text-black title-font text-base font-medium">Badrinath, Kedarnath, Yamunotri, Gangotri</h2>
                            <h3 class="text-green-800 text-lg font-bold tracking-widest title-font mb-1">Rs 5000</h3>
                            <button className="inline-flex text-green-800  outline py-2 px-6 focus:outline hover:bg-green-800 hover:text-white rounded text-base mt-1">Explore Now</button>
                        </div>
                    </div>


                </div>
            </div>

        </section >
    )
}

export default PopularPackage