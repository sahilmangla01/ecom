import React, { useContext } from "react";
import { AppContext } from "../Context/ProductsContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice/FormatPrice";

const FeatureProducts = () => {
  const { isLoading, featured } = useContext(AppContext);
  let log = localStorage.getItem('token')
  if (isLoading) {
    return <div>........LOADING</div>;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="heading">Our Featured Products</div>
        <div className="grid grid-three-column">
          {featured.map((current) => {
            
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
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 2.5rem 0;
  margin: 6rem 0 8rem;

  .intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
  }
  .heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
  }

  .card{
    background-color:#fff;
    border-radius:1rem;

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

  @media only screen and (min-width:540px) and (max-width:${({theme})=>theme.media.tab}){
    .intro-data{
      font-size:2rem;
      font-weight:bold;
    }
    .card{
      width: 40vw;
    }
  }


  
   
  
`;

export default FeatureProducts;
