import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import styled from 'styled-components'

const ImageSlider = () => {

      
      return (
        
           <Wrapper className='imageSlider'>
        
          <Carousel infiniteLoop autoPlay>
            <div className='image'>
            <img src="https://s3b.cashify.in/gpro/uploads/2022/01/19134457/Best-Cheap-Gaming-Laptops.jpg" alt='Screen1'/>
            </div>
            <div className='image'>
            <img src="https://s3b.cashify.in/gpro/uploads/2022/05/04122334/amazonsale2022.png" alt='Screen2'/>
            </div>
            <div className='image'>
            <img src="https://swadesistuff.com/cdn/shop/files/SF-Website-Banner-Summer_sale_1200x1200_crop_center.webp?v=1678619630" alt='SScreen3'/>
            </div>
            <div className='image'>
            <img src="https://pbs.twimg.com/media/FYfdWdPaAAAU7W9.jpg" alt='Screen4'/>
            </div>
            <div className='image'>
            <img src="https://cdn11.bigcommerce.com/s-745x53acpn/product_images/uploaded_images/20230515-canon-canada-s-50th-anniversary-sale-banner-600-1200x600-web-banner.jpg" alt='Screen4'/>
            </div>

          </Carousel>
          </Wrapper>
        
       
      )
}
const Wrapper = styled.section`
    .carousel{
      display:flex;
      justify-content:center;
    }
    .carousel .thumbs-wrapper{
      display:none;
    }
    .carousel .slide{
      height:60vh;
    }
    .carousel .slide img{
        max-height:100%;
        width:100vw;
    }
    .image{
      margin:0 auto;
      height:100%;
      width:auto;
    }

    @media only screen and (max-width:539px){
      
    
      .carousel .slide img{
        margin: auto;
        width:100vw;
        height:100%;
    }
    }

    @media only screen and (max-width:${({theme})=>theme.media.tab}) and (min-width:540px){
      
    
      .carousel .slide img{
        margin: auto;
        width:100vw;
        height:100%;
    }
    }

`


export default ImageSlider
