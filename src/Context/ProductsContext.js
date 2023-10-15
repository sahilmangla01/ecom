import { createContext,  useEffect,  useReducer } from "react";
import axios from 'axios'
import reducer from '../reducer/Reducer'

export const AppContext = createContext();
const Api = "https://ecommerceserver-tn9j.onrender.com/api/products";

const initialState = {
    isLoading:false,
    isError: false,
    products :[],
    featured:[],
    filterProducts:[],
    categoryProducts:[],
    isSingleProductLoading:false,
    singleProduct:[],
    gridView:true,
    sortValue: 'lowest',
    filters:{
        text:"",
        category:"all",
       
    },
   


}

const Store = ({ children }) => {

    const [state, dispatch] = useReducer(reducer , initialState)


    const getProducts =async (url)=>{
        dispatch({type:"API LOADING"})
        try{
            const res = await axios.get(url);
            const products = await res.data
      
    
            dispatch({type:"API DATA" , payload:products});
        }
        catch(err){
            dispatch({type:"API ERROR"})
        }
    }

    const getCategoryProducts =async (url)=>{
        dispatch({type:"API LOADING"})
        try{
            const res = await axios.get(url);
            const products = await res.data
    
            dispatch({type:"API CATEGORY DATA" , payload:products});
        }
        catch(err){
            dispatch({type:"API ERROR"})
        }
    }

    const getSingleProduct = async(url)=>{
        dispatch({type:"SINGLE PRODUCT LOADING"})
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data
            dispatch({type:"SINGLE PRODUCT DATA" , payload:singleProduct});
        } catch (error) {
            dispatch({type:"SINGLE PAGE ERROR"})
        }
    }

    const setGridView =()=>{
        return dispatch({type:"GRIDVIEW"})
    }
    const setListView =()=>{
        return dispatch({type:"LISTVIEW"})
    }

    const updateFilterValue =(event)=>{
        const name = event.target.name
        const value = event.target.value

        return dispatch({type:"UPDATEFILTER", payload:{name, value}})
    }

    
    useEffect(()=>{
        dispatch({ type: "FILTERPRODUCTS" });
        
    },[ state.filters], )

    useEffect(()=>{
        getProducts(Api);
    },[])


  



  return <AppContext.Provider value={{...state ,getCategoryProducts, getSingleProduct , setGridView ,setListView, updateFilterValue }}>{children}</AppContext.Provider>;
};

export default Store;
