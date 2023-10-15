import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import styled from 'styled-components'

const ImageSlider2 = () => {

      
      return (
        
           <Wrapper className='imageSlider'>
        
          <Carousel infiniteLoop autoPlay>
            <div className='image'>
            <img src="https://s3b.cashify.in/gpro/uploads/2022/07/05122206/Nord-2T-Sale-Ahead_-Everything-You-Need-to-Know-1.jpg" alt='Screen1'/>
            </div>
            <div className='image'>
            <img src="https://pbs.twimg.com/media/FOCTkOAaIAI3YU0.jpg" alt='Screen2'/>
            </div>
            <div className='image'>
            <img src="https://images.moneycontrol.com/static-mcnews/2022/04/realme-Smart-TV-X-FHD-770x433.jpg" alt='SScreen3'/>
            </div>
            <div className='image'>
            <img src="https://pbs.twimg.com/media/E-vk4u_VEAQ6h06.jpg" alt='Screen4'/>
            </div>
            <div className='image'>
            <img src="https://pbs.twimg.com/media/Epf8wV_XEAAj8zh.jpg" alt='Screen4'/>
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


export default ImageSlider2
