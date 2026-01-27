import React from 'react'
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill,RiSecurePaymentFill } from "react-icons/ri";
import styles from "../styles/Services.module.css"
const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>
        Services <MdOutlineMiscellaneousServices />
      </h2>

      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <TbTruckDelivery className={styles.icon} />
          <h3>Super Fast & Free Delivery</h3>
        </div>

        <div className={styles.serviceCard}>
          <IoShieldCheckmarkSharp className={styles.icon} />
          <h3>Non-Contact Shipping</h3>
        </div>

        <div className={styles.serviceCard}>
          <RiMoneyRupeeCircleFill className={styles.icon} />
          <h3>Money Back Guarantee</h3>
        </div>

        <div className={styles.serviceCard}>
          <RiSecurePaymentFill className={styles.icon} />
          <h3>Secure Payment System</h3>
        </div>
      </div>
    </section>
  )
}

export default Services