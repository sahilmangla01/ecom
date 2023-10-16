import React, { useContext} from "react";
import { AppContext } from "../Context/ProductsContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice/FormatPrice";


const BestSeller = () => {
  const { isLoading, products} = useContext(AppContext);
  

  if (isLoading) {
    return <div>........LOADING</div>;
  }
  return (
    
    <Wrapper className="section">
      <div className="container">
        
        <div className="heading">Best Seller</div>
        <div className="grid grid-three-column">
          {products.filter((e)=>e.best==="bestseller").map((current) => {
            
            return (
             
              <NavLink to={`/singleproduct/${current.id}`}  key={current.id}>
                <div className="card" >
                  <figure>
                    <img src={current.image[0].img} alt={current.name} />
                    <figcaption className="caption">
                      Best Seller
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
  padding: 5rem 0;
  margin: 6rem 0 8rem;

  
  .heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 4rem;
    text-transform: capitalize;
    text-align:center;
  }
  .grid{
    gap:5rem
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
      width: auto;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption{
      position:absolute;
      font-size:1.4rem;
      top:10%;
      right:7%;
      background-color:#1AACAC;
      padding:.6rem 1.6rem;
      color:white;
      border-radius:1rem;
      text-transform:uppercase;
    }

    
  
  }
  
 

`;

export default BestSeller;
