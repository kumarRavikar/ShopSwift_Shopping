import React from 'react'

const AddToCartReducer = (state,action) => {
  switch(action.type){
    case 'ADD_TO_CART':
        let {id, amount, product, colors} = action.payload;
        let existingItem = state.cart.find((currItem)=>currItem.id === id+colors);
        if(existingItem){
          let updateCartItem = state.cart.map((currItem)=>{
            if(currItem.id === id+colors){
              let newAmount = currItem.amount + amount;
              if(newAmount >= currItem.max){
                newAmount = currItem.max
              }
              return{
                ...currItem,
                amount:newAmount
              }
            }else{
              return currItem
            }
          })
          return{
            ...state,
            cart:updateCartItem 
          }
        }else{
          let cartProduct = {
            id: id+colors,
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
        }
        
    case 'REMOVE_PRODUCT':
      let updatePro = state.cart.filter(
        (currEle)=>currEle.id !== action.payload
      )
      return{
        ...state,
        cart:updatePro
      }
    case 'CLEAR_CART':
      return{
        ...state,
        cart:[]
      }  
      default:return state  
  }
}

export default AddToCartReducer