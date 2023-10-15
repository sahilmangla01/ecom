
import React ,{useContext, useEffect} from 'react'
import styled from 'styled-components'
import Sort from './ProductSection/Sort';
import { AppContext } from '../Context/ProductsContext';
import ProductList from './ProductSection/ProductList';
import { NavLink } from 'react-router-dom';




const Api = "https://ecommerceserver-tn9j.onrender.com/api/category"
const CategoryPage = ({urlCategory }) => {


    const { getCategoryProducts, isLoading, categoryProducts ,gridView } =
    useContext(AppContext);
    
    const getUniqueData = (data, attr) => {
      let newVal = data.map((curElem) => {
        return curElem[attr];
      });
      newVal = [...new Set(newVal)]
      return newVal
    }
    const companyData = getUniqueData(categoryProducts, "company");
  
      useEffect(() => {
        getCategoryProducts(`${Api}/${urlCategory}`);
      },[urlCategory,getCategoryProducts]);
  
  
      if (isLoading) {
        return <div>......SINGLE LOADING</div>;
      }
      return(
    <Wrapper>
    <div className="container grid grid-filter-column">
      
        
      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort products={categoryProducts} />
        </div>

        <div className='filter'> 
        {companyData.map((curElem, index) => {
            return (
              <NavLink to={`/category/${curElem}`} state={urlCategory}  key={index}>
              <button
               
                type="button"
                name="category"
                value={curElem}
                
                >
                {curElem}
              </button>
              </NavLink>
            );
          })}
        </div>

        <div className="main-product">
          <ProductList products = {categoryProducts} gridView={gridView}/>
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
