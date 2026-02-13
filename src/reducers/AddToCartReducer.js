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
    case 'INCREASE_AMOUNT':
      const updatedItm = state.cart.map((currEle)=>{
        if(currEle.id === action.payload){
          let incValue = currEle.amount + 1;
          if( incValue <= currEle.max ){
            incValue = currEle.max
          }
          return{
            ...currEle,
            amount:incValue
          }
        }else{
          return currEle;
        }
  })
      return{
         ...state,
         cart:updatedItm
      }  
    case 'DECREASE_AMOUNT':
      const updateItem = state.cart.map((currEle)=>{
        if(currEle.id === action.payload){
          let decValue = currEle.amount - 1;
          return{
            ...currEle,
            amount:decValue
          }
          
        }else{
          return currEle
        }
      })  
      return{
        ...state,
        cart:updateItem
      }
    // case 'NUMBER_OF_CART_ITEMS':
    //     let updateVal = state.cart.reduce((initial,currVal)=>{
    //       let {amount} = currVal;
    //       initial += amount;
    //       return initial
    //     },0)
    //     return {
    //       ...state,
    //       total_items:updateVal
    //     }
    //   case 'CALCULATE_SUBTOTAL':
    //     let updateValue = state.cart.reduce((initial,currEle)=>{
    //     let {amount, price} = currEle
    //     initial += amount * price
    //     return initial
    //     },0)  
    //     return{
    //       ...state,
    //       total_amount:Math.floor(updateValue)
    //     }
      case 'CALCULATE_TOTAL_ITEM_OR_TOTAL_AMOUNT':
        let {total_amount,total_items} = state.cart.reduce((accum,currEle)=>{
           let {amount,price} = currEle;
           accum.total_items += amount;
           accum.total_amount += amount * price 
           return accum
        },{
          total_amount : 0,
          total_items : 0
        })  
        return{
          ...state,
          total_amount,
          total_items
        }
      default:return state  
  }
}

export default AddToCartReducer