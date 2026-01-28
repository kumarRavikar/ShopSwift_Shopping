import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "../styles/Star.module.css";

const Stars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const number = i + 0.5;

    return (
      <span key={i} className={styles.star}>
        {rating?.rate >= i + 1 ? (
          <FaStar />
        ) : rating?.rate >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div className={styles.starWrapper}>
      <div className={styles.stars}>{stars}</div>
      <p className={styles.reviews}>
        ({rating?.count}) customer reviews
      </p>
    </div>
  );
};

export default Stars;
