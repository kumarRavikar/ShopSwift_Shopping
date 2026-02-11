import React from "react";
import { useFilterContext } from "../contex/FilterProductContext";
import styles from "../styles/FilterSection.module.css";
import PriceFormate from "./PriceFormate";
const FilterSection = () => {
  const {
    filters: { text, category, price, maxPrice, minPrice },
    updateFilterValu,
    all_products,
    clearFilters,
  } = useFilterContext();
  const getUniqueData = (data, catego) => {
    let newVal = data.map((curEle) => curEle[catego]);
    return (newVal = ["All", ...new Set(newVal)]);
  };
  let uniqueData = getUniqueData(all_products, "category");

  return (
    <>
      <div className={styles.filterContainer}>
        <div className={styles.searchBox}>
          <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValu}
              className={styles.inputFild}
              placeholder="SEARCH"
            />
          </form>
        </div>
        <div className={styles.priceCategory}>
          <h3>Category</h3>
          {uniqueData.map((currEle) => (
            <button
              type="button"
              key={currEle}
              className={
                category === currEle
                  ? `${styles.listItem} ${styles.active}`
                  : styles.listItem
              }
              name="category"
              value={currEle}
              onClick={updateFilterValu}
            >
              {currEle}
            </button>
          ))}
        </div>
        <div className={styles.priceCategory}>
          <h3>Price</h3>

          <p className={styles.priceValue}>
            <PriceFormate price={price} />
          </p>

          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValu}
          />
        </div>
        <div>
          <button className={styles.clearBtn} onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
