import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "../styles/Product.module.css"
import PriceFormate from './PriceFormate';
const Product = (currProduct) => {
   const {id, title, image, price, category} = currProduct;
  return (
   <NavLink to={`/products/${id}`} className={styles.card}>
      <div className={styles.cardInner}>
        <figure className={styles.figure}>
          <img src={image} alt={title} className={styles.image} />
          <figcaption className={styles.category}>{category}</figcaption>
        </figure>

        <div className={styles.cardData}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}><PriceFormate price={price}/></p>
        </div>
      </div>
    </NavLink>
  )
}

export default Product