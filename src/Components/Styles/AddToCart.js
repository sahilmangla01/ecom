import React from 'react'
import styled from 'styled-components';
import {Button} from './Button'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddToCart = ({stock , id, price}) => {

  const token=localStorage.getItem("token")
    const token1=window.atob(token.split(".")[1])
    const jsonString = `${token1}`;
    const obj = JSON.parse(jsonString);
    const userId = obj._id;
   


  const addToCart = ()=>{
    Navi('/cart')
    axios.post('https://ecommerceserver-tn9j.onrender.com/api/cart',{productId:id ,userId:userId ,quantity:1 ,stock:stock ,price:price } )
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  } 


    const Navi = useNavigate();
   
  return (
    <Wrapper className="cart-button">
   

    <Button onClick={addToCart}>Add To Cart</Button>
    
  </Wrapper>
  )
}

const Wrapper = styled.section`
.amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    width:10rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.help};
    }
  }
`;

export default AddToCart
