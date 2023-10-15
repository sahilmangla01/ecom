import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";


const Stars = ({star , review}) => {
    const starRating = Array.from({length:5},(e,i)=>{
        let num = i+0.5;
        return (
            <span key={i}>
              {star >= i + 1 ? (
                <FaStar className="icon" />
              ) : star >= num ? (
                <FaStarHalfAlt className="icon" />
              ) : (
                <AiOutlineStar className="icon" />
              )}
            </span>
          );
    })
  return (
    <Wrapper>
      <div className="icon-style">
        {starRating}
        <p>({review} customer reviews)</p>
      </div>
    </Wrapper>  
  )
}
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars
