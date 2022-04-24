import React from 'react'
import ClientReviews from '../components/homeComponent/ClientReviews'
import Content from '../components/homeComponent/Content'
import Content2 from '../components/homeComponent/Content2'
import FeaturedProducts from '../components/homeComponent/FeaturedProducts'
import Footer from '../components/homeComponent/Footer'
import Gallery from '../components/homeComponent/Gallery'
import HeroSection from '../components/homeComponent/HeroSection'
import PopularPackage from '../components/homeComponent/PopularPackage'

const Home = () => {
  return (
    <div className='bg-transparent'>
       <HeroSection/>
    <Content/>
    <Content2/>
    <PopularPackage/>
    <ClientReviews/>
    <FeaturedProducts/>
    <Gallery/>
    <Footer/>
    </div>
  )
}

export default Home