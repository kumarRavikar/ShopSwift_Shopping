import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../src/styles/ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <section className={styles.error}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.text}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className={styles.actions}>
          <NavLink to="/" className={styles.primaryBtn}>
            Go to Home
          </NavLink>
          <button
            className={styles.secondaryBtn}
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};
