import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductContext } from "./productContext";
import reducer from "../reducers/FilterReducer"
 const initialstate = {
    filter_product:[],
    all_products:[],
    grid_view:false
 }
const FilterProductContext = createContext();
export const FilterContextProvider=({children})=>{
    const {products} = UseProductContext();
   const [state, dispatch] = useReducer(reducer,initialstate);
   const setGridview =()=>{
    dispatch({type:'GRID_VIEW'})
   }
   useEffect(()=>{
    dispatch({type:'LOAD_FILTER_PRODUCTS', payload:products})
   },[products])

    return <FilterProductContext.Provider value={{...state, setGridview}}>
        {children}
    </FilterProductContext.Provider>
}
export const useFilterContext=()=>useContext(FilterProductContext)