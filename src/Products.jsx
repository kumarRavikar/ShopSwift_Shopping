import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'

export const Products = () => {
  return (
    <div>
      <div>
        <FilterSection/>
      </div>
      <section>
        <div>
          <Sort/>
        </div>
        <div>
          <ProductList/>
        </div>
      </section>
    </div>
  )
}
