import React from "react";
import styles from "../styles/Sort.module.css";
import { BsGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../contex/FilterProductContext";

const Sort = () => {
  const {
    filter_product,
    grid_view,
    setGridview,
    setListView,
    sorting
  } = useFilterContext();

  return (
    <div className={styles.sort_container}>
      <div className={styles.btn}>
        <button
          className={grid_view ? "" : styles.active}
          onClick={setGridview}
        >
          <BsGridFill />
        </button>

        <button
          className={!grid_view ?  "":styles.active }
          onClick={setListView}
        >
          <FaThList />
        </button>
      </div>

      <div className={styles.product_count}>
        {filter_product.length} Products
      </div>

      <select className={styles.price_dropdown} onChange={sorting}>
        <option value="lowest">Price (Low to High)</option>
        <option value="highest">Price (High to Low)</option>
        <option value="a-z">Name A → Z</option>
        <option value="z-a">Name Z → A</option>
      </select>
    </div>
  );
};

export default Sort;
