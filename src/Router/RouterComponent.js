import React from 'react'
import {  Routes , Route } from 'react-router-dom'
import Home from '../Components/Home'
import Mobiles from '../Components/Mobiles'
import Products from '../Components/Products'
import Laptop from '../Components/Laptop'
import SingleProduct from '../Components/SingleProduct'
import Cart from '../Components/Cart'
import Error from '../Error'
import Accessories from '../Components/Accessories'
import SubCategoryContent from '../SubCategoryContent'
import SignUp from '../Components/LoginSignup/SignUp'
import Login from '../Components/LoginSignup/Login'
import About from '../Components/About'
import Contact from '../Components/Contact'
const RouterComponent = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mobile' element={<Mobiles/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/laptop' element={<Laptop/>}/>
            <Route path='/accessories' element={<Accessories/>}/>
            <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
            <Route path='/category/:company' element={<SubCategoryContent/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/register' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element ={<Error/>}/>

        </Routes>
    
  )
}

export default RouterComponent
