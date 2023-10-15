import React from 'react'
import Services from './services/Services'
import FeatureProducts from './FeatureProducts'
import BestSeller from './BestSeller'
import ImageSlider from './Slider/ImageSlider'
import ImageSlider2 from './Slider/ImageSlider2'

 


const Home = () => {
  return (
    <>
    <ImageSlider2/>
    <BestSeller/>
    <ImageSlider/>
    <Services/>
    <FeatureProducts/>
    
    </>
  )
}


  


export default Home
