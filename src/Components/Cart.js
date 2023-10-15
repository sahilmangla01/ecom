import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/ProductsContext";
import styled from "styled-components";
import { Button } from "./Styles/Button";
import FormatPrice from "./FormatPrice/FormatPrice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./cart.css"



const Cart = () => {
  
  const [cart, setCart] = useState([]);
  const { products } = useContext(AppContext);
 const[pid , setPid]= useState()
 

  const token = localStorage.getItem("token");
  const token1 = window.atob(token.split(".")[1]);
  const jsonString = `${token1}`;
  const obj = JSON.parse(jsonString);
  const userId = obj._id;

  


  useEffect(() => {
  
    axios
      .post("https://ecommerceserver-tn9j.onrender.com/api/displayCart", { userId: userId })
      .then((res) => setCart(res.data.cart))
      .catch((err) => console.log(err));
  });


  const removeProduct =()=>{
    
    axios.post('https://ecommerceserver-tn9j.onrender.com/api/closeProduct',{userId: userId, productId:pid})
    .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      
  }

  const setIncrease =()=>{
   
    axios.post("https://ecommerceserver-tn9j.onrender.com/api/setIncrease",{userId: userId , productId:pid})
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }

  const setDecrease =()=>{
   
    axios.post("https://ecommerceserver-tn9j.onrender.com/api/setDecrease",{userId: userId , productId:pid})
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }



  const map = cart && cart.map((item) => item.productId);
  const quantity = cart && cart.map((item) => item.quantity);
  
  
  const price = cart && cart.map((item) => item.price);

  // console.log(quantity);
  // console.log(price);
 
 let p=1
 let arr =[]
for(let i=0; i<quantity.length; i++){
    p = quantity[i] *price[i]
    arr.push(p)
}

let amount = arr.reduce((sum, item) => {
  return sum + parseInt(item);
  }, 0)

let totalAmount = amount+4000




  



  return (
    <>

    {(cart.length===0)? <div className="empty">
      <div>Cart is Empty</div>
    <img src="https://www.ipharmascience.com/assets/img/webimg/emptycart.png" alt="empty"/>
    </div>
    :<Wrapper>

    
     
      
   

      <div className="cart">Cart</div>
      
      {products
        .filter((item) => map.includes(item._id))
        .map((e, index) => {


       return (
      
            <div key={index}>
              <div className="main">
              <div className="remove" onClick={removeProduct} onMouseOver={()=>setPid(e._id)}><AiOutlineCloseCircle className="icon"/></div>
                <div className="product">
                  <img src={e.image[0].img} alt={e.name}  />
                  
                  <div className="name">{e.name}</div>
                </div>


                  
                <div className="amount">
        <div className="amount-toggle">
          <button onClick={setDecrease} onMouseOver={()=>setPid(e._id)}>
            <FaMinus />
          </button>
          <div className="amount-style">{quantity[index]}</div>
          <button onClick={setIncrease} onMouseOver={()=>setPid(e._id)}>
            <FaPlus />
          </button>
        </div>
        <div className="price ">
                    <FormatPrice price={price[index]} value={quantity[index]}/>
                  </div>
        </div>
               
                  
                
                
              </div>
            </div>
          );  
        })}

        <div className="total">
          <div className="amountbx">
            <h3>Amount</h3>
            <h3><FormatPrice price={amount} value={1}/></h3>
          </div>

          <div className="amountbx">
            <h3>Shipping</h3>
            <h3><FormatPrice price={4000} value={1}/></h3>
          </div>

          <div className="amountbx">
            <h3>Total Amount</h3>
            <h3><FormatPrice price={totalAmount} value={1}/></h3>
          </div>

          <Button>Check Out</Button>
        </div>
          
    </Wrapper>
  }
  </>
  );
};

const Wrapper = styled.section`

.remove{
  
  color:red;
  .icon{
    font-size:3rem;
  }
}
.total{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width: 25vw;
  height:30vh;
  position:relative;
  left:60vw;
  bottom:2vh;
  background-color:${({theme})=>theme.colors.bg};
  padding:1rem;
  
  .amountbx{
    display:flex;
    justify-content:space-between;
    margin:1rem 0;
  }

}
  .main {
    width: 70vw;
    margin: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .product {
      width: 40vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3{
        margin-left:6rem;
      }
      img {
        max-width: 10vw;
        max-height: 20vh;
      }
      div {
        width: 20vw;
        font-size: 2rem;
        text-align: left;
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
  }
  .cart {
    font-size: 7rem;
    color: #04364a;
    font-weight: bold;
    margin: 2rem 0;
  }

  .amount {
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      font-size:2.5rem;
    }
    .amount-toggle {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 1.4rem;
      width: 10rem;
     

      button {
        border: none;
        background-color: #fff;
        cursor: pointer;
      }

      .amount-style {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.help};
      }
    }
  }

  @media only screen and (min-width:540px) and (max-width:${({theme})=>theme.media.tab}){
    .remove{
     
      .icon{
        
        font-size:4rem;
      }
    }
    .cart{
      font-size:5rem;
    }
    h3{
      font-size:2.8rem;
    }
    .amount{
      .price{
        font-size:3rem;
      }
    }
    .main{
      width:90vw;
      .amount{
        width:35vw;

      }
      .product{
        width:45vw;
       .name{
        font-size:3rem;
       }
      }
    }
    .total{
      margin-top:10vh;
      width:60vw;
      left:35vw;
      height:25vh;
    }
  }

  @media only screen and (max-width:${({theme})=>theme.media.mobile}){
   .titles{
    display:none;
   }
    .main{
      width:90vw;
      align-items:baseline;
    }
    .amount{
      width:28vw;
      height:10vh;
      align-items:baseline;
      flex-direction:column;
      position:relative;
      top:-3vh;
    }

    .total{
      width:80vw;
      left:10vw;
      height:25vh;
    }
  }
  
`;

export default Cart;
