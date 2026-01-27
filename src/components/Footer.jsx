import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "../styles/Footer.module.css"
const Footer = () => {
  return (
     <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.col}>
          <h3 className={styles.logo}>ShopSwift</h3>
          <p>
            ShopSwift is your trusted destination for fast, secure, and smart
            online shopping. Discover quality products at the best prices.
          </p>
        </div>

        {/* Mail Us */}
        <div className={styles.col}>
          <h4>Mail Us</h4>
          <p>Email: support@shopswift.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Subscribe */}
        <div className={styles.col}>
          <h4>Subscribe</h4>
          <p>Get updates about new products & offers</p>
          <form className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social */}
        <div className={styles.col}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} ShopSwift. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer