import React from "react";
import { useFilterContext } from "../contex/FilterProductContext";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((currEle) => currEle.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_product: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case "GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORTING_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORT_PRODUCT": {
      const { filter_product, sorting_value } = state;

      let tempSortProduct = [...filter_product];

      const sortingProduct = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.title.localeCompare(b.title);
        }
        if (sorting_value === "z-a") {
          return b.title.localeCompare(a.title);
        }
        return 0;
      };

      const newSortData = tempSortProduct.sort(sortingProduct);

      return {
        ...state,
        filter_product: newSortData,
      };
    }
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "UPDATE_FILTER_PRODUCT":
      const { all_products } = state;
      const { text, category, price } = state.filters;
      let temFilterProd = [...all_products];
      if (text) {
        temFilterProd = temFilterProd.filter((currEle) => {
          return currEle.title.toLowerCase().includes(text.toLowerCase());
        });
      }
      if (category && category !== "All") {
        temFilterProd = temFilterProd.filter((currEle) => {
          return currEle.category === category;
        });
      }
      if (price === 0) {
        temFilterProd = temFilterProd.filter(
          (currEle) => currEle.price === price,
        );
      } else {
        temFilterProd = temFilterProd.filter(
          (currEle) => currEle.price <= price,
        );
      }
      return {
        ...state,
        filter_product: temFilterProd,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          colors: "All",
          price: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default FilterReducer;
