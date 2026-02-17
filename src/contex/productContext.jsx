
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
 const enhanceProduct =(product)=>{
    return{
      ...product,
      stock:Math.floor(Math.random() * 10) + 1,
      images:[
       {id:1, url:product.image},{id:2,url:product.image},{id:3,url:product.image}
      ],
      colors:["red", "blue", "green"]
    }
 }
export const ProductContextProvider=({children})=>{
   const [state,dispatch] = useReducer(reducer, initialState);
  
    const getProducts = async(URL)=>{
      dispatch({type:'SET_LOADING'})
       try {
          const res = await axios.get(URL);
          const products = await res.data.map(enhanceProduct);
          dispatch({type:'SET_API_DATA',payload:products})
       } catch (error) {
         dispatch({type:'SET_API_ERROR'})
       }
    }
    const getSingleProduct=async(URL)=>{
      dispatch({type:'SET_SINGLE_LOADING'})
       try {
          const res = await axios.get(URL);
          const singleProduct = await enhanceProduct(res.data);
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