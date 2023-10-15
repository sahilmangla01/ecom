import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {FaFacebookSquare , FaDiscord, FaInstagram, FaYoutube, FaTwitterSquare,FaMobile } from "react-icons/fa";
import {BiSolidSend} from "react-icons/bi";


const Footer = () => {
  return (
  <>
    <Wrapper>
        

        <footer>
          <div className="container grid grid-three-column">
            <div className="footer-about">
            <NavLink to='/' > <div className='title '><span>TECH</span> SHOP</div></NavLink>
              <div className='summary'>Tech Shop is a place where people can go-to destination for the latest tech</div>
              <div className='icons--div'>
              <FaFacebookSquare className="icons" />
              <FaInstagram className="icons" />
              <FaYoutube className="icons" />
              <FaTwitterSquare className="icons" />
              </div>
            </div>


            <div className="footer-Services ">
            <div className="service">
              <div className='heading'>Services</div>
              <div className='elements'>
                <div><NavLink to="/products">Store</NavLink></div>
                <div><NavLink to='/mobile'>Mobile</NavLink></div>
                <div><NavLink to='/laptop'>Laptop</NavLink></div>
                <div><NavLink to='/accessories'>Accessories</NavLink></div>
              </div>
            </div>
              
            <div className="service">
              <div className='heading'>Partners</div>
              <div className='elements'>
                <div>Become a Partner</div>
                <div>Step to Integrate</div>
                <div>Partner List</div>
                
              </div>
            </div>

            </div>

            <div className="footer-ready">
            <div className='ready'>Ready to Get Started ?</div>   
              <div className='contact'>
                    <FaMobile className='icons'/>
                    <div>+91-8950121323</div>
              </div>
              <div className='contact'>
                    <BiSolidSend className='icons'/>
                    <div>support@techshop.com</div>
              </div>
            </div>
          </div>
          <div className="footer-bottom--section">
            <hr />
            <div className="container flex ">
              <p>
                @2023 TECH SHOP 
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>

          
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
background-color: gainsboro;
padding: 4rem 0 0;




gap:9rem;
.icons{
     margin-left:1rem;  
    font-size:4.5rem;
    
  }

  .footer-Services{
    display:flex;
    justify-content:space-between;
    
    .service{
       
        .heading{
            font-size:3rem;
            font-weight:bold;
            margin-bottom:2.3rem;
        }
        .elements{
            font-size:2rem;
            a{
              color:gray;
            }
            div{
              color:gray;
              
                margin-bottom:.5rem;
            }
            a:hover,div:hover{
              color:${({theme})=>theme.colors.help}
            }
        }
      }
  }

    .footer-ready{
        gap:3rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
        .ready{
            font-size: 5rem;
            font-weight: bold;
        }
        .contact{
            
            display: flex;
            justify-content:space-between;
            align-items:center;
            font-size:2.3rem;
            font-weight:500;

            div{
                color:gray;
            }
        }
    }

  .footer-about{
    gap:3rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    .summary{
        font-size:2.7rem;
        color:gray;
        
    }
    .icons--div{
        display:flex;
      }
      
    .title{
        width:25rem;
        color:black;
        border:3px solid black;
        font-size: 3rem;
        padding:  .5rem; 
        margin: 0 0 2rem;    
        span{
        padding:0 .3rem;
        letter-spacing:.5rem;
        color:white;
        background-color:${({theme})=>theme.colors.help};
    }
  }

   

  
  }

  .footer-bottom--section {
    padding:2rem 0;
    color:gray;
    .flex{
      display:flex;
      justify-content:space-between;
      div{
        width:30vw;
        display:flex;
      justify-content:space-between;

      p:hover{
        color:${({theme})=>theme.colors.help}
      }
      }
      

    }
  
    hr {
      margin-bottom: 2rem;
      
    }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(70%);
      text-align: center;
      

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
  @media(max-width:${({theme})=>theme.media.tab}){
    .footer-Services{
      
    }
  }

`;

export default Footer
