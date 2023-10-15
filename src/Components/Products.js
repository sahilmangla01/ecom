import React, { useContext } from 'react'
import FilterSection from './ProductSection/FilterSection';
import Sort from './ProductSection/Sort';
import ProductList from './ProductSection/ProductList';
import styled from "styled-components"
import { AppContext } from '../Context/ProductsContext';

const Products = () => {
  const{filterProducts, gridView}=useContext(AppContext)
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <FilterSection/>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort products={filterProducts}/>
          </div>
          <div className="main-product">
            <ProductList products={filterProducts} gridView={gridView}/>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (min-width:540px) and (max-width:${({theme})=>theme.media.tab}){
   
    .filter-search{
      input{
        width:90%;
        height:3vh;
        border:2px solid black;
      }
    }
    
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;


export default Products
