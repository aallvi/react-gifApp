import React, { Fragment, useState } from 'react'
import Proptypes from 'prop-types'




const AddCategory = ({setCategories,categories}) => {

    const [inputValue,setInputValue] = useState('')
    
    const handleInput = (e)=> {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( inputValue.trim().length > 2){
            setCategories([inputValue, ...categories]);

            setInputValue('');
        
        
        }
        
    }


    return (
        <Fragment>

           <form onSubmit={handleSubmit} >
           <input 
               type="text"
               value={inputValue}
               onChange={handleInput} />
        </form>
        </Fragment>
        
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}

export default AddCategory
