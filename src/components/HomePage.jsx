import React from 'react'
import styles from "../styles/HomePage.module.css"
const HomePage = ({pageDetails}) => {
     const {name,img,desc} = pageDetails;
  return (
    <section className={styles.home}>
    <div className={styles.content}>
        <h1>{name}</h1>
        <p>{desc}</p>
        <button className={styles.shopBtn} >Shop Now</button>
    </div>
    <div className={styles.imageBox}>
        <figure>
            <img src={img} alt='home page image'/>
        </figure>
    </div>
    </section>
  )
}

export default HomePage