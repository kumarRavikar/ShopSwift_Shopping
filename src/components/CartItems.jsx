import React from "react";
import styles from "../styles/CartItems.module.css";
import { FaTrash } from "react-icons/fa";
import PriceFormate from "./PriceFormate";

const CartItems = ({ id, name, image,  price, amount }) => {
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
        <FaTrash />
      </button>

    </div>
  );
};

export default CartItems;
