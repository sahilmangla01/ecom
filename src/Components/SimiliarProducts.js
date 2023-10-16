import React, { useContext } from "react";
import { AppContext } from "../Context/ProductsContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice/FormatPrice";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {

    

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const SimiliarProducts = ({category}) => {
  const { isLoading, products} = useContext(AppContext);

  const random = Math.floor(Math.random() * 10);
  
  if (isLoading) {
    return <div>........LOADING</div>;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="heading">Similiar Products</div>
      
        {/* <div className="grid grid-three-column"> */}
          <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          {products.filter(e=>e.category===category).slice(random, random+6).map((current) => {
            
            return (
              <NavLink to={`/singleproduct/${current.id}`} key={current.id}>
                <div className="card">
                  <figure>
                    <img src={current.image[0].img} alt={current.name} />
                    <figcaption className="caption">
                      TRENDING
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
              
            );
          })}
          </Carousel>
        {/* </div> */}
          
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};

  margin:0 0 8rem;
  height:auto;

  carousel{}
  .intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
  }
  .heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 4rem;
    text-transform: capitalize;
  }

  .card{
    background-color:#fff;
    border-radius:1rem;
    width:35rem;
    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p{
        color:blue;
      }
    }
    h3 {
      color: ${({ theme }) => theme.colors.black};
      text-transform: capitalize;
    }

    .card-data-price {
      color: ${({ theme }) => theme.colors.help};
    }
  }
  figure{
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
    img{
      width: auto;
      margin-top: 1.5rem;
      height: 19rem;
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
  @media only screen and (max-width:${({theme})=>theme.media.mobile}){
    padding: 2.5rem 0 0;
    height:auto;
    margin: 4rem 0;
    .card{
      width: 80vw;
      margin-left:2rem;
    }
  }

  @media only screen and (min-width:540px) and (max-width:${({theme})=>theme.media.tab}){
    padding: 2.5rem 0 0;
    height:auto;
    margin: 4rem 0;
    .intro-data{
      font-size:2rem;
      font-weight:bold;
    }
    .card{
      width: 40vw;
      margin-left:2rem;
    }
  }


  
   
  
`;

export default SimiliarProducts;
