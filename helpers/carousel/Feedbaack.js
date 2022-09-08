import React from 'react'

import { Carousel } from "react-responsive-carousel";
const Feedbaack = () => {
  return (
    <Carousel   infiniteLoop={true}
    stopOnHover={false}
    interval={4000}
    showIndicators={false}
    autoPlay={true}>
     <div className="carousel_container"> 
        </div>
</Carousel>
  )
}
export default Feedbaack 
