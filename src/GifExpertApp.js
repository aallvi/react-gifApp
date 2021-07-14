import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {

  
  const [categories, setCategories] = useState([])



    return (
        <Fragment>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} categories={categories} />
            <hr/>

            <ol>
               { 
               categories.map(category => ( 
               <GifGrid 
                    key= {category}
                    category={category} />
               ))

               }
            </ol>


            
        </Fragment>
    )
}


export default GifExpertApp
