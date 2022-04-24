import React from 'react'
import product1 from "../images/product-1.jpg"
import product2 from "../images/product-2.jpg"
import product5 from "../images/product-5.jpg"

const FeaturedProducts = () => {
    return (
        <section class="text-gray-600 body-font" >
        <div className='text-center mb-1'>
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-1 ml-2">Featured Products</h1>
        </div>

            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full border-slate-900 border-2 mr-3 ml-auto">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product1}/>
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full border-slate-900 border-2 mr-3">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product2}/>
                        </a>
                        <div class="mt-4 ">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                            <p class="mt-1">$21.15</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full border-slate-900 border-2 mr-auto">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product5}/>
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        
</section >
  )
}

export default FeaturedProducts