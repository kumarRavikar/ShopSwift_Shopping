import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductContext } from "./productContext";
import reducer from "../reducers/FilterReducer"
 const initialstate = {
    filter_product:[],
    all_products:[],
    grid_view:true,
    sorting_value:'lowest',
    filters:{
        text:'',
        category:'All',
        colors:'All',
        maxPrice:0,
        minPrice:0,
        price:0
    }
 }
const FilterProductContext = createContext();
export const FilterContextProvider=({children})=>{
    const {products} = UseProductContext();
   const [state, dispatch] = useReducer(reducer,initialstate);
   const setGridview =()=>{
    dispatch({type:'GRID_VIEW'})
   }
   const setListView =()=>{
    dispatch({type:'LIST_VIEW'})
   }
   const sorting=(event)=>{
    dispatch({type:'GET_SORTING_VALUE' ,payload:event.target.value})
   }
   const updateFilterValu = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({type:'UPDATE_FILTER_VALUE',payload:{name,value}})
   }
   useEffect(()=>{
    dispatch({type:'LOAD_FILTER_PRODUCTS', payload:products})
   },[products])
   //to Clearing Filters
   const clearFilters=()=>{
    return dispatch({type:'CLEAR_FILTERS'})
   }

   //to Sorting products
   useEffect(()=>{
    dispatch({type:'UPDATE_FILTER_PRODUCT'})
     dispatch({type:'SORT_PRODUCT'})
   },[state.sorting_value, state.filters])
   

    return <FilterProductContext.Provider value={{...state, setGridview, setListView, sorting,updateFilterValu,clearFilters}}>
        {children}
    </FilterProductContext.Provider>
}
export const useFilterContext=()=>useContext(FilterProductContext)