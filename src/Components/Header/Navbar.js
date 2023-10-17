import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { Button } from "../Styles/Button";
import axios from "axios";
import DropDown from "../Styles/DropDown";

const Navbar = () => {
  const [cart, setCart] = useState([]);
  
  const [togle, setTogle] = useState(false);
  const [togle2, setTogle2] = useState(false);
  const [togle3, setTogle3] = useState(false);
  const [togle4, setTogle4] = useState(false);
  let log = localStorage.getItem("login");
  let name = localStorage.getItem("user");

  const navi = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    navi("/");
  };
  const clickHandle = () => {
    setTogle(true);
    navi("/")
  };

 const token = localStorage.getItem('token')
  useEffect(() => {
    if(token){
      const token = localStorage.getItem("token");
    const token1 = window.atob(token.split(".")[1]);
    const jsonString = `${token1}`;
    const obj = JSON.parse(jsonString);
    const userId = obj._id;
    axios
      .post("https://ecommerceserver-tn9j.onrender.com/api/displayCart", { userId: userId })
      .then((res) => setCart(res.data.user.cart))
      .catch((err) => console.log(err));
    }
  });

  
 
  
  return (
    <Nav>
      <div className={togle ? "navbar active " : "navbar"}>
        <ul className="navbar_list  ">
          <li>
            <NavLink
              className="navbar-link"
              to="/"
              onClick={() => setTogle(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to="/products"
              onClick={() => setTogle(false)}
            >
              Store
            </NavLink>
          </li>
          <li onMouseEnter={()=>setTogle2(true)} onMouseLeave={()=>setTogle2(false)} className="navbar-link">
           
              <NavLink className="navbar-link" to='/mobile'>MOBILE</NavLink> <DropDown onMouseOver={(()=>setTogle2(true))} item={["oppo", 'apple','oneplus','samsung']}  togle2={togle2} togle={setTogle}/>
              
           
          </li>
          <li onMouseEnter={()=>setTogle3(true)} onMouseLeave={()=>setTogle3(false)} className="navbar-link">
           
          <NavLink className="navbar-link" to='/laptop'>LAPTOP</NavLink>  <DropDown onMouseOver={(()=>setTogle3(true))} item={["msi", 'mackbook','hp','asus']} togle={setTogle}  togle2={togle3}/>
              
           
          </li>
          <li onMouseEnter={()=>setTogle4(true)} onMouseLeave={()=>setTogle4(false)} className="navbar-link">
           
          <NavLink className="navbar-link" to='/accessories'>ACCESSORIES</NavLink> <DropDown onMouseOver={(()=>setTogle4(true))} item={["watch", 'buds','camera','speaker']} togle={setTogle} togle2={togle4}/>
           
         
          </li>

          <li>
            {log ? (
              <div>
                <div
                  className="profile navbar-link"
                  onClick={() => setTogle(!togle)}
                >
                  <CgProfile  className="hide"/>
                  <button className="logout" onClick={handleLogout}>Logout</button>
                </div>

                {togle ? (
                  <div className="dropDown">
                    <ul>
                      <li className="head">Welcome to Tech Shop  </li>
                      <li className="head">{name}  </li>
                      <li>
                        <button className="btn" onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <NavLink to="/login" className="navbar-link" onClick={() => setTogle(false)}>
                <Button>Login</Button>
              </NavLink>
            )}
          </li>

          <li>
            <NavLink
              className="navbar-link cart"
              to="/cart"
              onClick={() => setTogle(false)}
            >
              <FiShoppingCart className="cart-link" />
              <span className="cart-total">{(cart || []).length}</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-nav">
          <CgMenu
            className="mobile-nav-icon"
            name="menu-outline"
            onClick={clickHandle }
          />
          <CgClose
            className="mobile-nav-icon close-outline"
            name="close-outline"
            onClick={() => setTogle(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
.logout{
    background-color:${({theme})=>theme.colors.help};
    font-size:1.4rem;
    display:none;
    color:white;
    padding:.5rem  1.4rem;
    border-radius:1rem;
    border:1px solid ${({theme})=>theme.colors.help};
    transition: box-shadow 2s;
} 
.logout:hover{
    box-shadow:1rem 1rem 2rem ${({theme})=>theme.colors.help};
    
}
.btn2{
  font-size:2rem;
  border:transparent;
  font-weight:bold;
  transition: color 0.3s linear;

}
.btn2:hover, btn:active {
  color: ${({ theme }) => theme.colors.help};
}

.dropDown{
    position:absolute;
    right:2%;
    top:90%;
    
    background-color:${({theme})=>theme.colors.bg};
    padding:2rem .8rem;
    ul{
        height:10vh;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;

        .head{
            font-size:1.3rem;
        }  
        .btn{
            background-color:${({theme})=>theme.colors.help};
            font-size:1.4rem;
            color:white;
            padding:.5rem  1.4rem;
            border-radius:1rem;
            border:1px solid ${({theme})=>theme.colors.help};
            transition: box-shadow 2s;
        } 
        .btn:hover{
            box-shadow:1rem 1rem 2rem ${({theme})=>theme.colors.help};
            
        }
    }

}
  .navbar_list {
    display: flex;
    align-items: center;
    gap: 2.8rem;
    .profile {
      font-size: 3rem;
    }
  }
  .navbar-link {
    font-size:2rem;
    font-weight:bold;
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 550;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.help};
    }
  }
  .cart {
    position: relative;

    .cart-link {
      position: relative;
      font-size: 3 rem;
    }
    .cart-total {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: -20%;
      left: 85%;
      color: white;
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.help};
      border-radius: 50%;
      display: grid;
      place-items: center;
    }
  }
  .mobile-nav {
    display: none;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .dropDown{
      display:none;
    }
    .logout{
        display:block;
    }
    .hide{
        display:none;
    }
    .dropDown{
        position:block;
    }
    .mobile-nav {
      display: inline-block;
      z-index: 9999;
    }
    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3.5%;
      right: 10%;

      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    
    .navbar_list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      flex-direction: column;
      justify-content: center;
      display: none;
      opacity: 0;
      transform: translateX(100%);
      transition: all 1s linear;
    }
    .active .navbar_list {
      display: flex;
      opacity: 1;
      transform: translateX(0);
      z-index: 1;
      transform-origin: right;
      transition: all 1s linear;

      .navbar-link {
        font-size: 3rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}){
    .navbar_list{
      gap:2rem;
    }
  }
  
`;

export default Navbar;
