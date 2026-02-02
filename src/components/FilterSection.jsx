import React from 'react'
import { useFilterContext } from '../contex/FilterProductContext'
import styles from "../styles/FilterSection.module.css"
const FilterSection = () => {
  const {filters:{text,category},updateFilterValu,all_products} = useFilterContext();
  const getUniqueData=(data,catego)=>{
    let newVal = data.map((curEle)=>(
       curEle[catego]
    ))
   return newVal = ['All',...new Set(newVal)]
  }
  let uniqueData = getUniqueData(all_products,"category")
   
  return (
    <>
    <div className={styles.filterContainer}>
    <div className={styles.searchBox} >
      <form onSubmit={(e)=>e.preventDefault()} className={styles.form}>
        <input type='text'
         name='text'
         value={text}
         onChange={updateFilterValu}  className={styles.inputFild}
         placeholder='SEARCH'
         />
      </form>
    </div>
    <div className={styles.category}>
       <h3>Category</h3>
        {
          uniqueData.map((currEle)=>(
            <button type='button'
             key={currEle} 
            className={styles.listItem} 
            name='category' 
            value={currEle} 
            onClick={updateFilterValu}
            >{currEle}</button>
          ))
        }
    </div>
    </div>
    </>
  )
}

export default FilterSection