import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/AddToCartReducer"
const CartContext = createContext();
const initialState={
  cart:[],
  total_amount:'',
  total_items:'',
  shipping_fee:55000
}
export const CartContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart=(id, colors,amount, product)=>{
      dispatch({type:'ADD_TO_CART', payload:{id, colors,amount, product}})
    }
 return(
    <CartContext.Provider value={{...state,addToCart}}>
        {children}
    </CartContext.Provider>
 )
}
export const useAddToCartContext = ()=>useContext(CartContext);