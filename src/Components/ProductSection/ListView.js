import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../FormatPrice/FormatPrice';
import {Button} from "../Styles/Button"


const ListView = ({products}) => {
  const [page, setPage]= useState(0)
  const [npage, setNPage]= useState(1)
  const [togle , setTogle]= useState(true)

  const previousPage = ()=>{
      if(npage>1){
        setPage(page-6);
        setNPage(npage-1)
      }
      if(npage === 2){
        setTogle(true)
      }
  } 
  const nextPage = ()=>{
    if(npage<products.length/6){
      setPage(page+6);
      setNPage(npage+1)
    }
    if(npage+1 === products.length/6){
      setTogle(false)
    }

  }
  
    return (
        <Wrapper className="section">
          <div className="container grid">
            {products.slice(0, page+6).map((curElem) => {
              const { id, name, image, price, description } = curElem;
              return (
                <div className="card grid grid-two-column" key={curElem.id}>
                  <figure>
                    <img src={image[0].img} alt={name} />
                  </figure>
    
                  <div className="card-data">
                    <h3>{name}</h3>
                    <p>
                      <FormatPrice price={price} value={1}/>
                    </p>
                    <p>{description.slice(0, 90)}...</p>
    
                    <NavLink to={`/singleproduct/${id}` } className="btn-main">
                      <Button className="btn">Read More</Button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
            <div className='place'>
          {/* <Button className='button' onClick={previousPage}>Previous</Button> */}
          
            {togle ?<div className='button' onClick={nextPage}>Load More...</div>:<div className='button' onClick={previousPage}>Show Less...</div>}
            {/* {!togle?<div className='button' onClick={previousPage}>Show Less...</div>:""} */}
            
            </div>
          </div>
            
        </Wrapper>
      );
    };
    
    const Wrapper = styled.section`
      padding: 9rem 0;
      
      .container {
        max-width: 80rem;
      }
      .place{
        font-size:3rem;
        text-align:center;

      }
      .button:hover{
        color:${({theme})=>theme.colors.help}
      }
    
      .grid {
        gap: 3.2rem;
      }
    
      figure {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          transition: all 0.2s linear;
          cursor: pointer;
        }
        &:hover::after {
          width: 100%;
        }
        &:hover img {
          transform: scale(1.2);
        }
        img {
          width: auto; 
          margin-top: 1.5rem;
          height: 20rem;
          transition: all 0.2s linear;
        }
      }
    
      .card {
        border: 0.1rem solid rgb(170 170 170 / 40%);
    
        .card-data {
          padding: 0 2rem;
        }
    
        h3 {
          margin: 2rem 0;
          font-weight: 300;
          font-size: 2.4rem;
          text-transform: capitalize;
        }
    
        .btn {
          margin: 2rem 0;
          background-color: rgb(0 0 0 / 0%);
          border: 0.1rem solid rgb(98 84 243);
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(98 84 243);
    
          &:hover {
            background-color: rgb(98 84 243);
          }
    
          &:hover a {
            color: #fff;
          }
          a {
            color: rgb(98 84 243);
            font-size: 1.4rem;
          }
        }
    
        .btn-main .btn:hover {
          color: #fff;
        }
      }
      @media(max-width:${({theme})=>theme.media.mobile}){
        .container{
            width:80vw;
        }
      }
    `;

export default ListView
