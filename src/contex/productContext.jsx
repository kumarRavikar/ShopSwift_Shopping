
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducers"
 const ProductContext = createContext();
 export const UseProductContext =()=> useContext(ProductContext);
 const API = 'https://fakestoreapi.com/products';
 const initialState ={
   isLoading:false,
   products:[],
   featuredProducts:[],
   isError:false,
   isSingleLoading:false,
   singleProduct:{}
 }
export const ProductContextProvider=({children})=>{
   const [state,dispatch] = useReducer(reducer, initialState);
    const getProducts = async(URL)=>{
      dispatch({type:'SET_LOADING'})
       try {
          const res = await axios.get(URL);
          const products = await res.data;
          dispatch({type:'SET_API_DATA',payload:products})
       } catch (error) {
         dispatch({type:'SET_API_ERROR'})
       }
    }
    const getSingleProduct=async(URL)=>{
      dispatch({type:'SET_SINGLE_LOADING'})
       try {
          const res = await axios.get(URL);
          const singleProduct = await res.data;
          dispatch({type:'SET_SINGLE_PRODUCT', payload:singleProduct}) 
       } catch (error) {
        dispatch({type:'SET_SINGLE_ERROR'})
       }
    }
    useEffect(()=>{
      getProducts(API);
    },[])
   return (
   <ProductContext.Provider value={{...state, getSingleProduct}}>
    {children}
   </ProductContext.Provider>
   )
}