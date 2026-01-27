import React from 'react'

const ProductReducers = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
        return{
          ...state,
          isLoading:true
        }
    case 'SET_API_DATA':
        const featuredPro = action.payload.filter((currPro)=>currPro.rating.rate >= 4.5);
        return{
            ...state,
            isLoading:false,
            products:action.payload,
            featuredProducts:featuredPro,
            isError:false
        }
    case 'SET_ERROR':
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    case 'SET_SINGLE_LOADING':
        return{
            ...state,
            isSingleLoading:true,
            isError:false
        }    
    case 'SET_SINGLE_PRODUCT':
        return{
            ...state,
            isSingleLoading:false,
            singleProduct:action.payload
        }    
    case 'SET_SINGLE_ERROR':
        return{
            ...state,
            isSingleLoading:false,
            isError:true
        }    
    default:
        return state
  }
}

export default ProductReducers