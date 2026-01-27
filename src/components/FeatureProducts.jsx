import React from 'react'
import { UseProductContext } from '../contex/productContext'
import Product from './Product';
import styles from "../styles/FeatureProducts.module.css"
const FeatureProducts = () => {
    const {isLoading, featuredProducts} = UseProductContext();
     if(isLoading){
        return <div className={styles.loading}> ...LOADING </div>
     }
  return (
     <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.introText}>Check now</h3>
        <h2 className={styles.heading}>Featured Products</h2>

        <div className={styles.productGrid}>
          {featuredProducts.map((currProduct) => (
            <Product
              key={currProduct.id}
              product={{ ...currProduct }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureProducts