import React, {useState, useEffect} from 'react';
import {Data} from './API';
import {GallaryCom } from './GallaryCom'

export const Gallary = () => {
  const [ product, setProduct ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(res =>{
      console.log(res)
       setProduct(res)
    }).catch(e => {
      console.log(e)
    })
  }, [])

    return (
      
      <div className="container">
      <div className="row">
  {product.slice(-3).map(pro=>(
        <div className="col-4">
     
         <GallaryCom
         id={pro.id}
         titl={pro.title}
         url={pro.url}
         albumId={pro.albumId}
         />
      
         </div>
             ))}
      </div>
      
    </div>
    )
}
