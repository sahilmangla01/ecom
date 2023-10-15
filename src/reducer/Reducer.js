const productReducer =(state , action)=>{

    switch(action.type){
        case "API LOADING":
            return {
                ...state,
                isLoading:true
            };
        case "API DATA":
              const featureData = action.payload.filter((e)=> e.featured === true);  
              
              return{
                ...state,
                isLoading: false,
                products :action.payload,
                filterProducts:action.payload,
                featured:featureData
              }
        case "API CATEGORY DATA":
                
              return{
                ...state,
                isLoading: false,
                categoryProducts :action.payload,
                
              }

        case "FILTERPRODUCTS":
            let {products} = state;
            let temp = [...products]

            const {text, category} = state.filters
            
            if (text) {
                temp = temp.filter((curElem) => {
                  return curElem.name.toLowerCase().includes(text);
                });
              }

              
              if (category !== "all") {
                temp = temp.filter(
                  (curElem) => curElem.category === category
                );
              }
              

              
             
              return {
                ...state,
                filterProducts: temp,
                categoryProducts:temp
              };



        case "API ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }

        case "SINGLE PRODUCT LOADING":
            return{
                ...state,
                isSingleProductLoading:true
            }
         case "SINGLE PRODUCT DATA":
                return{
                    ...state,
                    isSingleProductLoading:false,
                    singleProduct:action.payload

            }
        case "SINGLE PAGE ERROR":
            return{
                ...state,
                isSingleProductLoading:false,
                isError:true
            }

        case "GRIDVIEW":
            return {
                ...state,
                gridView:true
            }
        case "LISTVIEW":
            return {
                ...state,
                gridView:false
            }
        case "UPDATEFILTER":
            const {name, value} = action.payload
            return{
                    ...state,
                    filters:{
                        ...state.filters,
                        [name] : value
                    }
                }
       
         default:
            return state;   

    }
}

export default productReducer