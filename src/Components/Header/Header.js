import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

const Header = () => {
  return (
    
           <>
           <MainHeader>
            
            <NavLink to='/' > <div className='title '><span>TECH</span> SHOP</div></NavLink>
            
            <Navbar/>
        </MainHeader>
           </>

  )
}

const MainHeader = styled.header`
display:flex;
justify-content: space-between;
align-items :   center;
padding : 0 4.8rem;
height : 8rem;
background-color : ${({theme})=> theme.colors.bg};
position: sticky;
top: 0;
z-index: 1;

 
    .title{
        color:black;
        border:3px solid black;
        font-size: 3.5rem;
        padding:  .5rem; 

        span{
        padding:0 .3rem;
        letter-spacing:.5rem;
        color:white;
        background-color:${({theme})=>theme.colors.help};
    }
}
    @media(max-width:${({theme})=>theme.media.mobile}){
        
        padding:0 3.8rem;
        
        
        
        
        .title{
            
            width:20rem;
            font-size:2.5rem;
            
        }
    }

    @media(max-width:${({theme})=>theme.media.tab}){
        
        padding:0 2rem;
        .title{
            font-size:1.5rem;
            width:13rem;
        }
    }
`;

export default Header
