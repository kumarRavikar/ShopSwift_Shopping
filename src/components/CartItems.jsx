import React from "react";
import styles from "../styles/CartItems.module.css";
import { FaTrash } from "react-icons/fa";
import PriceFormate from "./PriceFormate";
import { useAddToCartContext } from "../contex/AddToCartContext";

const CartItems = ({ id, name, image,  price, amount }) => {
  const {removeProduct} = useAddToCartContext();
  return (
    <div className={styles.cartRow}>
      
      {/* Product Info */}
      <div className={styles.productInfo}>
        <img src={image} alt={name} className={styles.productImg} />
        <div>
          <p className={styles.productName}>{name}</p>
      </div>
      </div>
      {/* Price */}
      <p><PriceFormate price={price}/></p>

      {/* Quantity */}
      <p>{amount}</p>

      {/* Subtotal */}
      <p><PriceFormate price={price * amount}/></p>

      {/* Remove */}
      <button className={styles.removeBtn}>
        <FaTrash onClick={()=>removeProduct(id)}/>
      </button>

    </div>
  );
};

export default CartItems;
