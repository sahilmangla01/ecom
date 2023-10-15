import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import Sort from './Components/ProductSection/Sort'
import { AppContext } from './Context/ProductsContext'
import ProductList from './Components/ProductSection/ProductList'
import styled from 'styled-components'
import { Button } from './Components/Styles/Button'

const Api = "https://ecommerceserver-tn9j.onrender.com/api/company"
const SubCategoryContent = () => {

   const {gridView}= useContext(AppContext)

    const [data, setData] =useState([])
   const {company} = useParams()
   const cat = useLocation().state
   
    useEffect(()=>{
        axios.get(`${Api}/${company}`)
        .then(res=> res.data)
        .then((e)=>setData(e))
    },[company])
  return (
    <Wrapper className='container'>
        <Sort products={data}/>
        <ProductList products={data}  gridView={gridView}/>
        <NavLink to={`/${cat}`}><Button>Back</Button></NavLink>
        </Wrapper>
  )
}

const Wrapper = styled.section`
    text-align:center;
    
`

export default SubCategoryContent
