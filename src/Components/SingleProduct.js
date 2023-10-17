import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "../Context/ProductsContext";
import styled from "styled-components";
import FormatPrice from "./FormatPrice/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import MyImage from "./MyImage";
import Stars from "./Styles/Stars";
import AddToCart from "./Styles/AddToCart";
import axios from "axios";
import SimiliarProducts from "./SimiliarProducts";

const Api = "https://ecommerceserver-tn9j.onrender.com/api/products";
const SingleProduct = () => {
  const {  isSingleProductLoading } = useContext(AppContext);
  const [data,setData]=useState()
  const  id  = useParams().id;

  useEffect(() => {
    axios.get(`${Api}/${id}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
  }, [id]);

  

  if (isSingleProductLoading) {
    return <div>......SINGLE LOADING</div>;
  }
  return (
    <>
    <Wrapper>
      {data &&
        data.map((e) => {
          return (
            <div key={e.id}>
              <div className="navigation">
                <NavLink to="/">Home</NavLink>/ {e.name}
              </div>

              <div className="container">
                <div className="grid grid-two-column">
                  
                  <div className="product_images">
                    <MyImage imgs={e.image} />
                  </div>

                  
                  <div className="product-data">
                    <h2>{e.name}</h2>
                    <Stars star={e.stars} review={e.reviews}/>
                    <p className="product-data-price">
                      MRP:
                      <del>
                        <FormatPrice price={e.price + 250000} value={1}/>
                      </del>
                    </p>
                    <p className="product-data-price product-data-real-price">
                      Deal of the Day: <FormatPrice price={e.price} value={1}/>
                    </p>
                    <p>{e.description}</p>
                    <div className="product-data-warranty">
                      <div className="product-warranty-data">
                        <TbTruckDelivery className="warranty-icon" />
                        <p>Free Delivery</p>
                      </div>

                      <div className="product-warranty-data">
                        <TbReplace className="warranty-icon" />
                        <p>30 Days Replacement</p>
                      </div>

                     

                      <div className="product-warranty-data">
                        <MdSecurity className="warranty-icon" />
                        <p>2 Year Warranty </p>
                      </div>
                    </div>

                    <div className="product-data-info">
                      <p>
                        Available:
                        <span> {e.stock > 0 ? "In Stock" : "Not Available"}</span>
                      </p>
                      
                      <p>
                        Brand :<span> {e.company} </span>
                      </p>
                    </div>
                    <hr />
                      {e.stock > 0 && <AddToCart stock={e.stock} id={e._id} price={e.price} />}
                      
                  </div>
                </div>
              </div>
              <SimiliarProducts category = {e.category}/>
            </div>
          );
        })}

    </Wrapper>
</>
  );
};
const Wrapper = styled.section`
  .navigation {
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 3.2rem;
    padding-left: 1.2rem;
  }
  a {
    color: #176b87;
  }
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.help};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    .container{
      margin:0;
      padding:0;
    }

    .navigation{
      background-color:#fff;
      font-size:2.6rem;
      align-items:baseline;
    }
  }
  @media only screen and (max-width:${({theme})=>theme.media.tab}) and (min-width:540px){
    padding: 0 2.4rem;
    .container{
      margin:0;
      padding:0;
      width:95vw;
    }
    .grid-two-column{
      grid-template-columns:1fr;
    }

    .navigation{
      background-color:#fff;
      font-size:2.6rem;
      align-items:baseline;
    }
  }
  }
  
`;

export default SingleProduct;
