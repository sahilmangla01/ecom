import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DropDown = ({item, togle2 , togle}) => {
  return (
   <>
    {togle2
        ?<Wrapper>
            <ul>
       <NavLink to={`/category/${item[0]}`} onClick={()=>togle(false)}> <li>{item[0].toUpperCase()}</li></NavLink>
       <NavLink to={`/category/${item[1]}`}  onClick={()=>togle(false)}> <li>{item[1].toUpperCase()}</li></NavLink>
       <NavLink to={`/category/${item[2]}`}  onClick={()=>togle(false)}> <li>{item[2].toUpperCase()}</li></NavLink>
       <NavLink to={`/category/${item[3]}`}  onClick={()=>togle(false)}> <li>{item[3].toUpperCase()}</li></NavLink></ul>
        
    </Wrapper>
    :""
    }
   </>
  )
}

const Wrapper = styled.div`
    position:absolute;

    top:50px;
    background-color:${({theme})=>theme.colors.bg};
    color:white;
    padding:1.6rem;
    
    border-radius:.25rem;
    transition:3s;

    ul{
        
        a{
            color:gray;
        }
        
        
    }
    li{
        font-size:1.5rem;
        border-radius:13rem;
        padding:1rem;
        
    }
    li:hover{
        background-color:${({theme})=>theme.colors.help};
        color:white;    
    }


    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        position:relative;
       top:10px;
       background-color:white;
    }
    li{
        font-size:1.7rem;
    }
`

export default DropDown
