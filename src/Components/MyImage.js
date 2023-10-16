import React,{useState} from 'react'
import styled from 'styled-components';

const MyImage = ({ imgs = [{ img: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => {
          return (
            <figure key={index}>
              <img
                src={curElm.img}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="main-screen">
        <img src={mainImage.img} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      width: 6vw;
      height: 14vh;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    
    img {
      width:auto;
      height:auto;
      margin-left:3rem;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.tab}) {
    display: flex;
    flex-direction: column;
    order: 1;
    width: 90vw;

    .grid{
      img{
        width:15vw;
        height:15vh;
      }
    }
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
    .main-screen{
        img{
         max-width:60%;
         height:100%;
            margin-left:2rem;
        }
      }
  }
  
`;

export default MyImage
