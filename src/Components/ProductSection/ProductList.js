import React from "react";

import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = ({products , gridView}) => {
   
    
   if(gridView === true){
    return <GridView products = {products} />
   }
   if(gridView === false){
    return <ListView products = {products}/>
   }

   
}

export default ProductList
