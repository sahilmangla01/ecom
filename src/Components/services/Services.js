import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";


const Services = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-three-column '>
                <div className='service1'>
                   
                    <TbTruckDelivery className='icon'/>
                    <h3>Super Fast and Free Delivery</h3>
                    
                </div>

                <div className='service2'>
                    <div className='column'>
                        
                        <MdSecurity className='icon'/>
                        <h3>Non-Contact Shipping</h3>
                       
                    </div>
                    <div className='column'>
                       
                        <GiReceiveMoney className='icon'/>
                        <h3>Money-back Guarenteed</h3>
                        
                    </div>
                </div>

                <div className='service3'>
                    
                    <RiSecurePaymentLine className ='icon'/>
                    <h3>Super Secure Payment Services</h3>
                    
                </div>
            </div>
        </div>
    </Wrapper>
  )
    
  
}

const Wrapper = styled.section`
    padding: 7rem 0;
    
    .service1,
    .service2,
    .service3 {
      width: auto;
      height: 25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      background-color:${({theme})=>theme.colors.bg};
      border-radius: 2rem;
      place-items:center;
    }
    .service2{
        gap:4.8rem;
        background-color:transparent;
        
        .column{
            display:flex;   
            background-color:${({theme})=>theme.colors.bg};
            align-items:center;
            justify-content:center;
            flex:1;
            border-radius:2rem;
            width:35rem;

        }
   }
   .container{
    .grid{
        margin:0 5%;
        
    }
   }
     
    .icon {
        
        width: 7rem;
        height: 7rem;
        padding: 1.5rem;
        border-radius: 50%;
        background-color: #fff;
        color: #5138ee;
        margin:0 .5rem;
        
      }

      @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        padding:3rem 0;
        .service1,
        .service2,
        .service3 {
          width: 80vw;
        }
       .service2{
        .column{
            width:100%;
        }
       }
      }
      @media only screen and (min-width:540px) and (max-width:${({theme})=>theme.media.tab}){
        .service1,
        .service2,
        .service3 {
            margin:2rem;
        }
       
        .container{
            width:90vw;
           margin:0 5%;
            .grid-three-column{
                grid-template-columns:  1fr;

                .service2{
                    .column{
                        width:100%;
                    }
                }
            }
        }
      }

`;

export default Services
