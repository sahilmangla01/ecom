import React, { useContext } from 'react'
import styled from "styled-components"
import { AppContext } from '../../Context/ProductsContext'

const FilterSection = () => {
  const {filters:{text ,category} ,updateFilterValue,products} = useContext(AppContext)
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    newVal = ["all",...new Set(newVal)]
    return newVal
  }

    const categoryData = getUniqueData(products, "category");
    
  return (
    <Wrapper>
       <div className="filter-search ">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input
              placeholder="Search Engine"
              type="text"
              name = "text"
              value={text}
              autoComplete='off'
              onChange={updateFilterValue}
            />
           </form>
      </div>


  
      <div className="filter-category">
        <div>
          <h3>Category</h3>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      
      
      
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 4rem 0;
display: flex;
flex-direction: column;
gap: 3rem;

h3 {
  padding: 2rem 0;
  font-size: bold;
}

.filter-search {
  input {
    padding: 0.6rem 1rem;
    width: 90%;
  }
}



  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
  
      button {
        border: none;
        background-color: #fff;
        text-transform: uppercase;
        cursor: pointer;
  
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
  
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  
  
  
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    width : 90%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }


  

  @media(max-width:${({theme})=>theme.media.mobile}){
    padding: 2rem 0;
    .filter-search {
      
      input {
        
        width: 90vw;
        
      }  
      
      
    }

    @media only screen and (min-width:540px) and (max-width:${({theme})=>theme.media.tab}){
      padding: 0;
    }
    
`;


export default FilterSection
