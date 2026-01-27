import React from 'react'
import styles from "../styles/trusted.module.css"
const Trusted = () => {
  return (
    <section className={styles.trusted}>
      <h2 className={styles.heading}>
        Trusted by <span>500+</span> Companies
      </h2>

      <div className={styles.logos}>
        <img src="https://dummyimage.com/120x60/ccc/000&text=Amazon" alt="Amazon" />
        <img src="https://dummyimage.com/120x60/ccc/000&text=Flipkart" alt="Flipkart" />
        <img src="https://dummyimage.com/120x60/ccc/000&text=Google" alt="Google" />
        <img src="https://dummyimage.com/120x60/ccc/000&text=Microsoft" alt="Microsoft" />
        <img src="https://dummyimage.com/120x60/ccc/000&text=Meta" alt="Meta" />
      </div>
    </section>
  )
}

export default Trusted