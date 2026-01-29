import React from 'react'

const FilterReducer = (state,action) => {
   switch(action.type){
    case 'LOAD_FILTER_PRODUCTS':
        return{
            ...state,
            filter_product:[...action.payload],
            all_product:[...action.payload]
        }
        case 'GRID_VIEW':
            return{
                ...state,
                grid_view:true
            }
    default:return state;
   }
}

export default FilterReducer