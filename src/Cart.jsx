import React from 'react'
import { useAddToCartContext } from './contex/AddToCartContext'
import CartItems from './components/CartItems';
import styles from "./styles/Cart.module.css"
const Cart = () => {
  const {cart} = useAddToCartContext();
  console.log('cart item' , cart);
  return (
  <div className={styles.cartContainer}>
    
    {/* Header */}
    <div className={styles.cartHeader}>
      <p>Item</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
      <p>Remove</p>
    </div>

    <hr className={styles.divider} />

    {/* Cart Items */}
    <div className={styles.cartItems}>
      {cart.map((currEle) => (
        <CartItems key={currEle.id} {...currEle} />
      ))}
    </div>

  </div>
);

}

export default Cart