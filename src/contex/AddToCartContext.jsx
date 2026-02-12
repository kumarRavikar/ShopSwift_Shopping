import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/AddToCartReducer"
const CartContext = createContext();
const getLocalData=()=>{
  try {
    const localData = localStorage.getItem("cartItems");

    if (!localData || localData === "undefined") {
      return [];
    }

    return JSON.parse(localData);
  } catch (error) {
    console.error("Error parsing cart data:", error);
    return [];
  }
}
const initialState={
  cart:getLocalData(),
  total_amount:'',
  total_items:'',
  shipping_fee:55000
}
export const CartContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart=(id, colors,amount, product)=>{
      dispatch({type:'ADD_TO_CART', payload:{id, colors,amount, product}})
    }
    const removeProduct=(id)=>{
      dispatch({type:'REMOVE_PRODUCT',payload:id})
    }
    const clearCart=()=>{
      dispatch({type:'CLEAR_CART'})
    }
    useEffect(()=>{
      localStorage.setItem('cartItems',JSON.stringify(state.cart))
    },[state.cart])
 return(
    <CartContext.Provider value={{...state,addToCart,removeProduct,clearCart}}>
        {children}
    </CartContext.Provider>
 )
}
export const useAddToCartContext = ()=>useContext(CartContext);