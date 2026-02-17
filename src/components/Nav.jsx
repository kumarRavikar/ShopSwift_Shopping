import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuMotion,CgClose  } from "react-icons/cg";
import styles from "../styles/Nav.module.css";
import { useAddToCartContext } from '../contex/AddToCartContext';
import { useAuth0 } from '@auth0/auth0-react';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false);
  const {total_items} = useAddToCartContext();
  const {user,loginWithRedirect,logout,isAuthenticated} = useAuth0();
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
         {
          isAuthenticated && <p className={styles.link} >{user.name}</p>
         }
        {
          isAuthenticated?(  <button className={styles.btn} onClick={()=>logout({ returnTo:window.location.origin})}>LogOut</button>):
          (<button className={styles.btn} onClick={()=>loginWithRedirect()}>LogIn</button>)
        }
        
        
        <NavLink to="/cart" className={styles.link} onClick={closeMenu}>
          <div className={styles.cartWrapper}>
          
              <FiShoppingCart className={styles.cartIcon} />
            <span className={styles.cartCount}>{total_items}</span>
           
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