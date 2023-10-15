import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../FormatPrice/FormatPrice';

const GridView = ({products}) => {
  let log = localStorage.getItem('token')
    return (
        <Wrapper className="section">
          <div className="contain grid grid-three">
            {products.map((current) => {
              return (
                <NavLink to={log?`/singleproduct/${current.id}`:'/login' } key={current.id}>
                <div className="card">
                  <figure>
                    <img src={current.image[0].img} alt={current.name} />
                    <figcaption className="caption">
                      {current.category}
                    </figcaption>
                  </figure>

                  <div className="card-data">
                    <div className="card-data-flex">
                      <h3>{current.name}</h3>
                      <p className="card-data-price"><FormatPrice price={current.price} value={1}/></p>
                    </div>
                  </div>
                </div>
              </NavLink>
              )
            })}
          </div>
        </Wrapper>
      );
    };
    
    const Wrapper = styled.section`
      padding: 9rem 0;
    
      .contain {
        width: 60vw;
        margin : 0 auto;
      }
    
      .grid {
        gap: 3.2rem;
      }
      .grid-three{
        grid-template-columns:repeat(3,1fr);
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
          max-width: 90%;
          margin-top: 1.5rem;
          height: 20rem;
          transition: all 0.2s linear;
        }
        .caption{
            position:absolute;
            font-size:1.8rem;
            top:10%;
            right:10%;
            background-color:${({theme})=>theme.colors.bg};
            padding:.6rem 1.6rem;
            color:gray;
            border-radius:1rem;
            text-transform:uppercase;
          }
      }
    
      .card {
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
    
        .card-data {
          padding: 0 1rem;
        }
    
        .card-data-flex {
          margin: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;

          h3 {
            color: black;
            text-transform: capitalize;
          }

          p{
            color:blue;
          }
         
        }

    
       
    
       
    
        .btn {
          margin: 2rem auto;
          background-color: rgb(0 0 0 / 0%);
          border: 0.1rem solid rgb(98 84 243);
          display: flex;
          justify-content: center;
          align-items: center;
    
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
      }
     @media only screen and (max-width:${({theme})=>theme.media.mobile}){
      padding:4rem 0;
      .contain{
        width:90vw;
      }
      .grid-three{
        grid-template-columns:1fr;
      }
     }

     @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
      padding:5rem 0; 
      .contain{
        width:90vw;
      }
      .grid-three{
        grid-template-columns:repeat3,1fr);
      }
     }
     
   
             
    `;

export default GridView
