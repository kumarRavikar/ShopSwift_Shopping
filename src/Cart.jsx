import React from 'react'
import { useAddToCartContext } from './contex/AddToCartContext'
import CartItems from './components/CartItems';
import styles from "./styles/Cart.module.css"
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const {cart,clearCart} = useAddToCartContext();
 if (cart.length === 0) {
  return (
    <div className={styles.emptyCart}>
      <h2>Your Cart is Empty</h2>
      <p>Looks like you haven't added anything yet.</p>

      <NavLink to="/products">
        <button className={styles.shopBtn}>
          Start Shopping
        </button>
      </NavLink>
    </div>
  );
}
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
    <hr className={styles.divider}/>
     <div className={styles.cartButtons}>
  <NavLink to="/products">
    <button className={styles.continueBtn}>
      Continue Shopping
    </button>
  </NavLink>

  <button 
    className={styles.clearBtn}
    onClick={clearCart}
  >
    Clear Cart
  </button>
</div>
  </div>
);

}

export default Cart