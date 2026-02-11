import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import styles from "./styles/ProductNav.module.css"
export const Products = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.filter}>
        <FilterSection/>
      </aside>
      <section className={styles.productSection}>
        <div>
          <Sort/>
        </div>
        <div className={styles.products}>
          <ProductList/>
        </div>
      </section>
    </div>
  )
}
