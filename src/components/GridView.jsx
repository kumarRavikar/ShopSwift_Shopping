import React from 'react'
import Product from "./Product"
import styles from "../styles/GridView.module.css"
const GridView = ({products}) => {
    
  return (
    <div className={styles.grid}>
        {
            products.map((product)=>(
                <Product key={product.id} {...product}/>
            ))
        }
    </div>
  )
}

export default GridView