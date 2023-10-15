import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }
  
  
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
  
  body {
    height:100vh;
    overflow-x: hidden;
     scrollbar-color: rgb(98 84 243);
      scrollbar-width: thin;
  }
  

  
  body::-webkit-scrollbar-thumb {
   
    background: #fff;
      border: 5px solid transparent;
      border-radius: 9px;
      background-clip: content-box;
  }

  h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 5rem;
  font-weight: 900;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
  
.container{
    width:120rem;
    margin : 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  @media only screen and (max-width:${({theme})=>theme.media.mobile}){
    .container{
        width:90vw;
        margin:0 5%;
    }
    html{
        font-size:50%;
    }
    .grid{
        gap:3.2rem;
    }
    .grid-two-column , .grid-three-column, .grid-four-column{
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
    .grid-three-column{
      grid-template-columns:80vw;
      

    }
    .grid{
      gap:0;
    }
    .container{
      width:90vw;
        // margin:0 5%;
      .grid-three-column{
        grid-template-columns:repeat(2,1fr);
      }
    }

    
   
  }

`;