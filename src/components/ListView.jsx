import React from 'react'
import PriceFormate from './PriceFormate'
import { NavLink } from 'react-router-dom'
import styles from "../styles/ListView.module.css"
const ListView = ({products}) => {
  return (
    <div className={styles.list} > 
      {products.map(({id, title, image, price, category,description})=>( 
        <div key={id} className={styles.card}>
         <figure className={ styles.imageBox}>
          <img src={image} alt={title}/>
         </figure>
         <div className={styles.content}>
          <h4 className={styles.category}>{category}</h4>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}><PriceFormate price={price}/></p>
          <p className={styles.desc}>{description.slice(0,80)}...</p>
           </div>
           <NavLink to={`/products/${id}`} className={styles.link}>
            <button className={styles.btn}>Read More</button>
           </NavLink>
        </div>
      ))}
    </div>
  )
}

export default ListView