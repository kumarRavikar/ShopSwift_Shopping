import React from 'react'

const AddToCartReducer = (state,action) => {
  switch(action.type){

    case 'ADD_TO_CART':
        let {id, amount, product, colors} = action.payload;
        let cartProduct = {
            id: Date.now(),
            name:product.title,
            colors,
            amount,
            image:product.image,
            price:product.price,
            max:product.stock
        }
        return{
            ...state,
           cart:[...state.cart, cartProduct]
        }
      default:return state  
  }
}

export default AddToCartReducer