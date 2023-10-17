
import React ,{useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import Sort from './ProductSection/Sort';
import { AppContext } from '../Context/ProductsContext';
import ProductList from './ProductSection/ProductList';

import axios from 'axios';




const Api = "https://ecommerceserver-tn9j.onrender.com/api/category"
const CategoryPage = ({urlCategory }) => {
  const[data,setData]=useState([])


    const {  isLoading ,gridView } =
    useContext(AppContext);
    
   
  
      useEffect(() => {
        axios.get(`${Api}/${urlCategory}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
      },[urlCategory]);
  
  
      if (isLoading) {
        return <div>......SINGLE LOADING</div>;
      }
      return(
    <Wrapper>
    <div className="container grid grid-filter-column">
      
        
      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort products={data} />
        </div>

       

        <div className="main-product">
          <ProductList products = {data} gridView={gridView}/>
        </div>
      </section>
    </div>
  </Wrapper>
  )
  };
  
  const Wrapper = styled.section`
  
  .filter{
    margin:5rem auto 0;
    display:flex;
    
    justify-content:space-around;
    width:50vw;
    

    button{
      border: none;
        background-color: #fff;
        text-transform: uppercase;
        cursor: pointer;
  
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-filter-column {
    grid-template-columns: 1fr;

  }
  .filter{
    width:80vw;
  }
  }

  


  `;


export default CategoryPage
