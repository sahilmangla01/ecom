import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Sort from './Components/ProductSection/Sort'
import { AppContext } from './Context/ProductsContext'
import ProductList from './Components/ProductSection/ProductList'
import styled from 'styled-components'

const Api = "https://ecommerceserver-tn9j.onrender.com/api/company"
const SubCategoryContent = () => {

   const {gridView}= useContext(AppContext)

    const [data, setData] =useState([])
   const {company} = useParams()
   
   
    useEffect(()=>{
        axios.get(`${Api}/${company}`)
        .then(res=> res.data)
        .then((e)=>setData(e))
    },[company])
  return (
    <Wrapper className='container'>
        <Sort products={data}/>
        <ProductList products={data}  gridView={gridView}/>
        
        </Wrapper>
  )
}

const Wrapper = styled.section`
    text-align:center;
    
`

export default SubCategoryContent
