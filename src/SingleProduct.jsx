import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UseProductContext } from './contex/productContext'
import PageNavigation from './components/PageNavigation'
import styles from '../src/styles/SingleProduct.module.css'

const API = 'https://fakestoreapi.com/products'

export const SingleProduct = () => {
  const { id } = useParams()
  const { singleProduct, isSingleLoading, getSingleProduct } = UseProductContext()

  const { category, title, description, price, rating, image } = singleProduct

  useEffect(() => {
    getSingleProduct(`${API}/${id}`)
  }, [id])

  if (isSingleLoading) {
    return <div className={styles.loader}>Loading product details...</div>
  }

  return (
    <section className={styles.wrapper}>
      <PageNavigation title={title} />

      <div className={styles.card}>
        {/* Product Image */}
        <div className={styles.imageSection}>
          <span className={styles.badge}>{category}</span>
          <img src={image} alt={title} />
        </div>

        {/* Product Info */}
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.description}>{description}</p>

          <div className={styles.meta}>
            <span className={styles.rating}>
              ⭐ {rating?.rate} / 5
            </span>
            <span className={styles.reviews}>
              ({rating?.count} reviews)
            </span>
          </div>

          <div className={styles.divider} />

          <div className={styles.priceRow}>
            <span className={styles.price}>₹ {price}</span>
            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

