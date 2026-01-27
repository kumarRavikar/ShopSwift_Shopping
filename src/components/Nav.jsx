import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuMotion,CgClose  } from "react-icons/cg";
import styles from "../styles/Nav.module.css";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false);
  return (
   <>
   <nav className={styles.nav}>
      {/* Nav Links */}
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <NavLink to="/" className={styles.link} onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" className={styles.link} onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" className={styles.link} onClick={closeMenu}>
          Contact
        </NavLink>

        <NavLink to="/products" className={styles.link} onClick={closeMenu}>
          Products
        </NavLink>

        <NavLink to="/cart" className={styles.link} onClick={closeMenu}>
          <div className={styles.cartWrapper}>
          
              <FiShoppingCart className={styles.cartIcon} />
            <span className={styles.cartCount}>10</span>
           
          </div>
        </NavLink>
      </div>

      {/* Menu Button (mobile only) */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CgClose /> : <CgMenuMotion />}
      </div>
    </nav>
   </>

  )
}

export default Nav