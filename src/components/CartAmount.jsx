import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "../styles/CartAmount.module.css";

const CartAmount = ({ descAmount, incAmount, amount }) => {
  return (
    <div className={styles.amountBox}>
      <button
        className={styles.amountBtn}
        onClick={descAmount}
        disabled={amount <= 1}
      >
        <FaMinus />
      </button>

      <p className={styles.amount}>{amount}</p>

      <button
        className={styles.amountBtn}
        onClick={incAmount}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmount;
