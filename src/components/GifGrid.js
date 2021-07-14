import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);


    // const [images, setImages] = useState([])

    // useEffect( () => {
    //     getGifts(category)
    //     .then(setImages)
    // }, [category])


    return (
        <Fragment>
        <h3 className="animate__animated animate__fadeInDown"> {category} </h3>

        {loading && <p> Loading...</p> }

         <div className="card-grid">
            
                  {
                    
                     data.map(img => ( 
                         <GifGridItem 
                         key= {img.id}
                         {...img} />
                     ))
                     
                     
                     }
                
              </div>

        
        </Fragment>
    )
}


export default GifGrid



  // <div className="card-grid">
            
        //      {
                
        //          images.map(img => ( 
        //              <GifGridItem 
        //              key= {img.id}
        //              {...img} />
        //          ))
                 
                 
        //          }
            
        //   </div>